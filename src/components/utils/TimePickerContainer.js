import React, { useState } from "react";

/*
  NOTE: This component is just for tests and stories inside this repo;
  however, it can serve as an example of the minimal implementation of
  the `TimePicker` component (aside from the use of `React.cloneElement`).
*/

const TimePickerContainer = ({
  id = "time-picker",
  time: initialTime = null,
  focused: initialFocused = false,
  onTimeChange = () => undefined,
  onFocusChange = () => undefined,
  children,
  ...restProps
}) => {
  const [time, setTime] = useState(initialTime);
  const [focused, setFocused] = useState(initialFocused);

  const handleTimeChange = (nextTime) => {
    setTime(nextTime);
    onTimeChange(nextTime);
  };

  const handleFocusChange = ({ focused: nextFocused }) => {
    setFocused(nextFocused);
    onFocusChange({ focused: nextFocused });
  };

  return React.cloneElement(children, {
    id,
    time,
    onTimeChange: handleTimeChange,
    focused,
    onFocusChange: handleFocusChange,
    ...restProps,
  });
};

export default TimePickerContainer;
