import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import BackButton from "../../components/UI/BackButton";
import Button from "../../components/UI/Button";
import useRegistration from "../../../hooks/use-registration";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../redux/slice/form-slice";

const CompleteForm = () => {
  const { EmailValidationSchema, data, TextInput } = useRegistration();
  const dispatch = useDispatch();

  const handleEmailSubmission = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <Formik
        initialValues={data}
        validationSchema={EmailValidationSchema}
        onSubmit={handleEmailSubmission}
      >
        {({ isValid }) => (
          <Form className="" action="#" method="POST">
            <TextInput
              label="Enter your email"
              name="email"
              id="email"
              type="email"
            />

            <div className="btn">
              <div>
                <BackButton />
                <Button
                  type="submit"
                  text="Complete Submission"
                  disabled={!isValid}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default CompleteForm;
