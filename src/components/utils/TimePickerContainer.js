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
  children,
  ...restProps
}) => {
  const [time, setTime] = useState(initialTime);
  const [focused, setFocused] = useState(initialFocused);

  const onTimeChange = nextTime => {
    setTime(nextTime);
  };

  const onFocusChange = ({ focused: nextFocused }) => {
    setFocused(nextFocused);
  };

  return React.cloneElement(children, {
    id,
    time,
    onTimeChange,
    focused,
    onFocusChange,
    ...restProps
  });
};

export default TimePickerContainer;
