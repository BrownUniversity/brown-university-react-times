import PropTypes from "prop-types";
import { Component } from "react";

export const CLICK_AND_HOLD_MILLISECONDS = 125;

class ClickAndHold extends Component {
  buttonPressTimeout = null;

  onClickInterval = null;

  constructor(props) {
    super(props);
    this.state = {
      onClickCallCount: 0,
    };
  }

  handleButtonPress = () => {
    this.buttonPressTimeout = setTimeout(
      this.handleOnClickIntervalStart,
      CLICK_AND_HOLD_MILLISECONDS,
    );
  };

  handleButtonRelease = ({ clicked }) => {
    clearTimeout(this.buttonPressTimeout);
    if (clicked && this.state.onClickCallCount < 1) {
      this.props.onClick();
    }
    this.handleOnClickIntervalEnd();
  };

  handleOnClickIntervalStart = () => {
    this.onClickInterval = setInterval(() => {
      this.props.onClick();
      this.setState((prevState) => ({
        onClickCallCount: prevState.onClickCallCount + 1,
      }));
    }, CLICK_AND_HOLD_MILLISECONDS);
  };

  handleOnClickIntervalEnd = () => {
    clearInterval(this.onClickInterval);
    this.setState({ onClickCallCount: 0 });
  };

  render() {
    return this.props.children({
      onMouseDown: this.handleButtonPress,
      onMouseUp: () => this.handleButtonRelease({ clicked: true }),
      onMouseLeave: () => this.handleButtonRelease({ clicked: false }),
      onKeyPress: (e) => {
        if ([" ", "Enter"].includes(e.key)) {
          this.handleButtonRelease({ clicked: true });
        }
      },
    });
  }
}

ClickAndHold.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default ClickAndHold;
