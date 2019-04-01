import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { Manager, Reference, Popper } from "react-popper";
import Dial from "./Dial";
import {
  getInputIsDirty,
  getInputValueIsValid,
  transformInputValueToDialValues,
  transformTimeToDialValues,
  transformDialValuesToTime,
  hoursDialOptions,
  minutesDialOptions,
  meridiemDialOptions,
  getNextDialOption,
  getPreviousDialOption
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
    inputIsDirty: false,
    inputValue: null,
    inputValueIsValid: false
  };

  initialState = this.state;

  wrapper = React.createRef();

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentDidUpdate(prevProps, prevState) {
    const timeChanged = prevProps.time !== this.props.time;
    const inputValueChanged = prevState.inputValue !== this.state.inputValue;
    const { inputIsDirty, inputValue, inputValueIsValid } = this.state;

    if (inputValueIsValid) {
      // trigger a time change and reset the input value when it becomes valid
      this.props.onTimeChange(
        transformDialValuesToTime(
          ...transformInputValueToDialValues(inputValue)
        )
      );
      this.handleInputValueReset();
    } else if (timeChanged && !["", "Invalid Time"].includes(this.props.time)) {
      // reset the input value when a valid time is set via the clock
      this.handleInputValueReset();
    } else if (inputValueChanged && inputIsDirty && !inputValueIsValid) {
      // trigger a time change when the input value becomes empty or invalid
      this.props.onTimeChange(inputValue === "" ? "" : "Invalid Time");
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("keyDown", this.handleKeydown);
  }

  handleInputValueChange = e => {
    const inputValue = e.target.value;

    this.setState({
      inputIsDirty: getInputIsDirty(inputValue),
      inputValue,
      inputValueIsValid: getInputValueIsValid(inputValue)
    });

    if (!this.props.focused) {
      this.handleFocusChange(true);
    }
  };

  handleInputValueReset = () => {
    this.setState(this.initialState);
  };

  handleFocusChange = focused => {
    this.props.onFocusChange({ focused });
  };

  handleClick = e => {
    // click outside of time picker
    if (!this.wrapper.current.contains(e.target)) {
      this.handleFocusChange(false);
    }
  };

  handleKeydown = e => {
    // tab key
    if (this.wrapper.current && e.keyCode === 9) {
      // close time picker on shift + tab from first element
      if (
        e.shiftKey &&
        e.target.getAttribute("aria-label") === "hours:minutes meridiem"
      ) {
        this.handleFocusChange(false);
      }

      // close time picker on tab from last element
      if (
        !e.shiftKey &&
        e.target.getAttribute("aria-label") === "Decrement meridiem"
      ) {
        this.handleFocusChange(false);
      }
    }
  };

  render() {
    const { color, id, time, onTimeChange, focused } = this.props;
    const { inputIsDirty, inputValue, inputValueIsValid } = this.state;
    const [hh, mm, aa] = transformTimeToDialValues(time);
    const hoursDialValue = hh === "--" ? "12" : hh;
    const minutesDialValue = mm === "--" ? "00" : mm;
    const meridiemDialValue = aa === "--" ? "PM" : aa;
    const shouldShowDialValues = !inputIsDirty || inputValueIsValid;

    return (
      <div ref={this.wrapper}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <DesktopInput
                aria-label="hours:minutes meridiem"
                type="text"
                ref={ref}
                id={id}
                value={inputIsDirty ? inputValue : `${hh}:${mm} ${aa}`}
                onFocus={() => this.handleFocusChange(true)}
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
                      value={shouldShowDialValues ? hoursDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          transformDialValuesToTime(
                            getNextDialOption(hoursDialOptions, hoursDialValue),
                            minutesDialValue,
                            meridiemDialValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          transformDialValuesToTime(
                            getPreviousDialOption(
                              hoursDialOptions,
                              hoursDialValue
                            ),
                            minutesDialValue,
                            meridiemDialValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      name="minutes"
                      value={shouldShowDialValues ? minutesDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          transformDialValuesToTime(
                            hoursDialValue,
                            getNextDialOption(
                              minutesDialOptions,
                              minutesDialValue
                            ),
                            meridiemDialValue
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          transformDialValuesToTime(
                            hoursDialValue,
                            getPreviousDialOption(
                              minutesDialOptions,
                              minutesDialValue
                            ),
                            meridiemDialValue
                          )
                        )
                      }
                    />
                    <Dial
                      color={color}
                      name="meridiem"
                      value={shouldShowDialValues ? meridiemDialValue : "--"}
                      increment={() =>
                        onTimeChange(
                          transformDialValuesToTime(
                            hoursDialValue,
                            minutesDialValue,
                            getNextDialOption(
                              meridiemDialOptions,
                              meridiemDialValue
                            )
                          )
                        )
                      }
                      decrement={() =>
                        onTimeChange(
                          transformDialValuesToTime(
                            hoursDialValue,
                            minutesDialValue,
                            getPreviousDialOption(
                              meridiemDialOptions,
                              meridiemDialValue
                            )
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
