import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { Manager, Reference, Popper } from "react-popper";
import Dial from "./Dial";
import {
  getInputIsDirty,
  getInputValueIsValid,
  transformInputValueForOutput,
  transformTimeIn,
  transformTimeOut,
  hhOptions,
  mmOptions,
  aaOptions,
  getNextOption,
  getPreviousOption
} from "./utils";
import { inputCSS } from "../../../styles";

/*
  inner components
*/
const DesktopInput = styled.input`
  ${inputCSS}
  padding: 10px;

  &:focus {
    outline: 0;
  }
`;

const PopperWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  padding: 22px;

  &[data-placement*="bottom-start"] {
    margin-top: 20px;
  }
`;

const Fang = styled.div`
  &[data-placement*="bottom-start"] {
    position: absolute;
    border: 8px solid transparent;
    border-bottom-color: #fff;
    border-top: none;
    margin-top: -8px;
    top: 0;

    &::before {
      border: 8px solid transparent;
      border-bottom-color: #dbdbdb;
      border-top: none;
      border-width: 9px;
      content: "";
      left: -9px;
      position: absolute;
      top: -1px;
      z-index: -1;
    }
  }
`;

const ClockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 104px;
`;

/*
  outer DesktopTimePicker component
*/
class DesktopTimePicker extends PureComponent {
  state = {
    inputValue: null
  };

  wrapper = React.createRef();

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentDidUpdate(prevProps) {
    const { inputValue } = this.state;

    if (getInputIsDirty(inputValue) && getInputValueIsValid(inputValue)) {
      this.props.onTimeChange(
        transformTimeOut(...transformInputValueForOutput(inputValue))
      );
      this.handleInputValueReset();
    } else if (prevProps.time !== this.props.time) {
      this.handleInputValueReset();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleInputValueChange = e => {
    this.setState({
      inputValue: e.target.value
    });

    if (!this.props.focused) {
      this.props.onFocusChange({ focused: true });
    }
  };

  handleInputValueReset = () => {
    this.setState({ inputValue: null });
  };

  handleOutsideClick = e => {
    if (!this.wrapper.current.contains(e.target)) {
      this.props.onFocusChange({ focused: false });
    }
  };

  render() {
    const {
      color,
      id,
      time,
      onTimeChange,
      focused,
      onFocusChange
    } = this.props;
    const { inputValue } = this.state;
    const inputIsDirty = getInputIsDirty(inputValue);
    const inputValueIsValid = getInputValueIsValid(inputValue);
    const [hh, mm, aa] = transformTimeIn(time);
    const hhDialValue = hh === "--" ? "12" : hh;
    const mmDialValue = mm === "--" ? "00" : mm;
    const aaDialValue = aa === "--" ? "PM" : aa;
    const shouldShowDialValues = !inputIsDirty || inputValueIsValid;

    return (
      <div ref={this.wrapper}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <DesktopInput
                aria-label="hh:mm aa"
                type="text"
                ref={ref}
                id={id}
                value={inputIsDirty ? inputValue : `${hh}:${mm} ${aa}`}
                onFocus={() => onFocusChange({ focused: true })}
                onChange={this.handleInputValueChange}
              />
            )}
          </Reference>
          {focused && (
            <Popper placement="bottom-start">
              {({ ref, style, placement }) => (
                <PopperWrapper
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  <Fang data-placement={placement} />
                  <ClockWrapper aria-label="Clock">
                    <Dial
                      color={color}
                      name="hours"
                      value={shouldShowDialValues ? hhDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          transformTimeOut(
                            getNextOption(hhOptions, hhDialValue),
                            mmDialValue,
                            aaDialValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          transformTimeOut(
                            getPreviousOption(hhOptions, hhDialValue),
                            mmDialValue,
                            aaDialValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      name="minutes"
                      value={shouldShowDialValues ? mmDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          transformTimeOut(
                            hhDialValue,
                            getNextOption(mmOptions, mmDialValue),
                            aaDialValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          transformTimeOut(
                            hhDialValue,
                            getPreviousOption(mmOptions, mmDialValue),
                            aaDialValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      name="meridiem"
                      value={shouldShowDialValues ? aaDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          transformTimeOut(
                            hhDialValue,
                            mmDialValue,
                            getNextOption(aaOptions, aaDialValue)
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          transformTimeOut(
                            hhDialValue,
                            mmDialValue,
                            getPreviousOption(aaOptions, aaDialValue)
                          )
                        )
                      }
                    />
                  </ClockWrapper>
                </PopperWrapper>
              )}
            </Popper>
          )}
        </Manager>
      </div>
    );
  }
}

DesktopTimePicker.propTypes = {
  color: PropTypes.oneOf([
    "red",
    "brown",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ]),
  id: PropTypes.string.isRequired,
  time: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  onFocusChange: PropTypes.func.isRequired
};

DesktopTimePicker.defaultProps = {
  color: "red",
  time: null
};

export default DesktopTimePicker;
