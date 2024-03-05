import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TimePickerContainer from "../../src/components/utils/TimePickerContainer";

export default function TimePickerContainerWithValidation(props) {
  return (
    <Formik
      initialValues={{ time: "" }}
      validationSchema={Yup.object().shape({
        time: Yup.string()
          .required("Required")
          .matches(/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/, {
            message: "Invalid",
          }),
      })}
    >
      {({ values, setFieldValue, setFieldTouched }) => (
        <Form>
          <TimePickerContainer
            time={values.time}
            onTimeChange={(nextTime) => {
              setFieldValue("time", nextTime);
            }}
            onFocusChange={({ focused }) => {
              if (!focused) {
                setFieldTouched("time");
              }
            }}
            {...props}
          />
          <ErrorMessage
            name="time"
            component="div"
            style={{ color: "red", marginTop: 10 }}
          />
        </Form>
      )}
    </Formik>
  );
}
