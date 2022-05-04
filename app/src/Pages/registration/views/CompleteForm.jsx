import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import BackButton from "../../components/UI/BackButton";
import Button from "../../components/UI/Button";
import useRegistration from "../../../hooks/use-registration";

const CompleteForm = () => {
  const { EmailValidationSchema, data, TextInput } = useRegistration();

  return (
    <Fragment>
      <Formik
        initialValues={data}
        validationSchema={EmailValidationSchema}
        onSubmit={(values) => console.log(values)}
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
