import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TimePickerContainer from "../../src/components/utils/TimePickerContainer";
import { TimePicker } from "../../src";

const TimePickerWithValidation = (children, commonProps) => (
  <Formik
    initialValues={{ time: "" }}
    validationSchema={Yup.object().shape({
      time: Yup.string()
        .required("Required")
        .matches(/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/, {
          message: "Invalid"
        })
    })}
  >
    {({ values, setFieldValue, setFieldTouched }) => (
      <Form>
        <TimePickerContainer
          time={values.time}
          onTimeChange={nextTime => {
            setFieldValue("time", nextTime);
          }}
          onFocusChange={({ focused }) => {
            if (!focused) {
              setFieldTouched("time");
            }
          }}
          {...commonProps}
        >
          <TimePicker />
        </TimePickerContainer>
        <ErrorMessage
          name="time"
          component="div"
          style={{ color: "red", marginTop: 10 }}
        />
      </Form>
    )}
  </Formik>
);

export default TimePickerWithValidation;
