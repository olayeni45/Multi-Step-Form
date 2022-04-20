import React from "react";
import {
  TextInput,
  EmailValidationSchema,
} from "../formik-helpers/formik-helpers";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateForm } from "../../redux/slice/form-slice";
import Back from "../UI/Back";
import Button from "../UI/Button";

const CompleteForm = () => {
  const formDetails = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleFormSubmission = (values) => {
    dispatch(updateForm({ type: "email", data: values.email }));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: formDetails.email,
        }}
        validationSchema={EmailValidationSchema}
        onSubmit={handleFormSubmission}
      >
        {({ dirty, isValid }) => (
          <Form className="" action="#" method="POST">
            <TextInput
              label="Enter your email"
              name="email"
              id="email"
              type="email"
            />

            <div className="btn">
              <div>
                <Back />
                <Button
                  type="submit"
                  text="Complete Submission"
                  disabled={!(isValid && dirty)}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CompleteForm;
