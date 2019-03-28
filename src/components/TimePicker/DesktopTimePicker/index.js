import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { Manager, Reference, Popper } from "react-popper";
import Dial from "./Dial";
import {
  getInputIsDirty,
  getInputValueIsValid,
  mungeTimeIn,
  mungeTimeOut,
  hhOptions,
  mmOptions,
  AOptions,
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

const TimePickerPopper = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  padding: 22px;

  &[data-placement*="bottom-start"] {
    margin-top: 20px;
  }
`;

const TimePickerDialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const TimePickerFang = styled.div`
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

/*
  outer DesktopTimePicker component
*/
class DesktopTimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: null
    };

    this.wrapper = React.createRef();

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleInputValueReset = this.handleInputValueReset.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentDidUpdate(prevProps) {
    const { inputValue } = this.state;

    if (getInputIsDirty(inputValue) && getInputValueIsValid(inputValue)) {
      this.props.onTimeChange(mungeTimeOut(...inputValue.trim().split(/:| /)));
      this.handleInputValueReset();
    } else if (prevProps.time !== this.props.time) {
      this.handleInputValueReset();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleInputValueChange(e) {
    this.setState({
      inputValue: e.target.value
    });

    if (!this.props.focused) {
      this.props.onFocusChange({ focused: true });
    }
  }

  handleInputValueReset() {
    this.setState({ inputValue: null });
  }

  handleOutsideClick(e) {
    if (!this.wrapper.current.contains(e.target)) {
      this.props.onFocusChange({ focused: false });
    }
  }

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
    const [hh, mm, A] = mungeTimeIn(time);
    const hhDialValue = hh === "--" ? "12" : hh;
    const mmDialValue = mm === "--" ? "00" : mm;
    const ADialValue = A === "--" ? "PM" : A;
    const shouldShowDialValues = !inputIsDirty || inputValueIsValid;

    return (
      <div ref={this.wrapper}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <DesktopInput
                ref={ref}
                type="text"
                id={id}
                value={inputIsDirty ? inputValue : `${hh}:${mm} ${A}`}
                onFocus={() => onFocusChange({ focused: true })}
                onChange={this.handleInputValueChange}
              />
            )}
          </Reference>
          {focused && (
            <Popper placement="bottom-start">
              {({ ref, style, placement }) => (
                <TimePickerPopper
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  <TimePickerDialsWrapper>
                    <Dial
                      color={color}
                      value={shouldShowDialValues ? hhDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          mungeTimeOut(
                            getNextOption(hhOptions, hhDialValue),
                            mmDialValue,
                            ADialValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          mungeTimeOut(
                            getPreviousOption(hhOptions, hhDialValue),
                            mmDialValue,
                            ADialValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      value={shouldShowDialValues ? mmDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hhDialValue,
                            getNextOption(mmOptions, mmDialValue),
                            ADialValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hhDialValue,
                            getPreviousOption(mmOptions, mmDialValue),
                            ADialValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      value={shouldShowDialValues ? ADialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hhDialValue,
                            mmDialValue,
                            getNextOption(AOptions, ADialValue)
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hhDialValue,
                            mmDialValue,
                            getPreviousOption(AOptions, ADialValue)
                          )
                        )
                      }
                    />
                    <TimePickerFang data-placement={placement} />
                  </TimePickerDialsWrapper>
                </TimePickerPopper>
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
