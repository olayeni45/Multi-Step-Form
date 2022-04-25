import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import Button from "../../components/UI/Button";
import useRegistration from "../../../hooks/use-registration";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../redux/slice/form-slice";

const NameForm = () => {
  const { NameValidationSchema, data, TextInput } = useRegistration();
  const dispatch = useDispatch();

  const handleNameSubmission = (values) => {
    dispatch(nextStep(values));
  };

  return (
    <Fragment>
      <Formik
        initialValues={data}
        validationSchema={NameValidationSchema}
        onSubmit={handleNameSubmission}
      >
        {({ isValid }) => (
          <Form className="" action="#" method="POST">
            <TextInput
              label="Enter your name"
              id="name"
              name="name"
              type="text"
            />

            <div className="pt-4 flex justify-end">
              <Button type="submit" text="Next Step" disabled={!isValid} />
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default NameForm;
