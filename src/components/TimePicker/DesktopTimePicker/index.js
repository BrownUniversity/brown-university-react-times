import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { Manager, Reference, Popper } from "react-popper";
import Dial from "./Dial";
import {
  getInputValueIsValid,
  mungeTimeIn,
  mungeTimeOut,
  hOptions,
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
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentDidUpdate(prevProps) {
    const { time, onTimeChange } = this.props;
    const { inputValue } = this.state;

    if (getInputValueIsValid(inputValue) || inputValue === "") {
      onTimeChange(mungeTimeOut(...inputValue.split(/:| /)));
      this.setState({ inputValue: null });
    } else if (prevProps.time !== time) {
      this.setState({ inputValue: null });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleInputValueChange(e) {
    this.setState({
      inputValue: e.target.value
    });
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
    const inputValueIsValid = inputValue
      ? getInputValueIsValid(inputValue)
      : true;
    const [h, mm, A] = mungeTimeIn(time);
    const hValue = h === "--" ? "12" : h;
    const mmValue = mm === "--" ? "00" : mm;
    const AValue = A === "--" ? "PM" : A;

    return (
      <div ref={this.wrapper}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <DesktopInput
                ref={ref}
                type="text"
                id={id}
                value={inputValue || `${h}:${mm} ${A}`}
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
                      value={inputValueIsValid ? hValue : "--"}
                      increment={() =>
                        onTimeChange(
                          mungeTimeOut(
                            getNextOption(hOptions, hValue),
                            mmValue,
                            AValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          mungeTimeOut(
                            getPreviousOption(hOptions, hValue),
                            mmValue,
                            AValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      value={inputValueIsValid ? mmValue : "--"}
                      increment={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hValue,
                            getNextOption(mmOptions, mmValue),
                            AValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hValue,
                            getPreviousOption(mmOptions, mmValue),
                            AValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      value={inputValueIsValid ? AValue : "--"}
                      increment={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hValue,
                            mmValue,
                            getNextOption(AOptions, AValue)
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          mungeTimeOut(
                            hValue,
                            mmValue,
                            getPreviousOption(AOptions, AValue)
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
