import PropTypes from "prop-types";
import { Component } from "react";

class ClickAndHold extends Component {
  milliseconds = 125;

  buttonPressTimer = null;

  onClickInterval = null;

  handleButtonPress = () => {
    this.buttonPressTimer = setTimeout(
      this.handleOnClickIntervalStart,
      this.milliseconds
    );
  };

  handleButtonRelease = () => {
    clearTimeout(this.buttonPressTimer);
    this.handleOnClickIntervalEnd();
  };

  handleOnClickIntervalStart = () => {
    this.onClickInterval = setInterval(
      () => this.props.onClick(),
      this.milliseconds
    );
  };

  handleOnClickIntervalEnd = () => {
    clearInterval(this.onClickInterval);
  };

  render() {
    const { children, ...restProps } = this.props;

    return children({
      ...restProps,
      onMouseDown: this.handleButtonPress,
      onMouseUp: this.handleButtonRelease,
      onMouseLeave: this.handleButtonRelease
    });
  }
}

ClickAndHold.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default ClickAndHold;
