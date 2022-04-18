import React from "react";
import {
  NameValidationSchema,
  TextInput,
} from "../formik-helpers/formik-helpers";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateForm } from "../../redux/slice/form-slice";
import { nextStep } from "../../redux/slice/step-slice";
import Button from "../UI/Button";


const NameForm = () => {
  const formDetails = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleNameSubmission = (values) => {
    const name = values.name;
    if (name.trim().length >= 1) {
      dispatch(updateForm({ type: "name", data: name }));
      dispatch(nextStep());
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: formDetails.name,
        }}
        validationSchema={NameValidationSchema}
        onSubmit={handleNameSubmission}
      >
        <Form className="" action="#" method="POST">
          <TextInput
            label="Enter your name"
            id="name"
            name="name"
            type="text"
          />

          <div className="pt-4 flex justify-end">
            <Button type="submit" text="Next Step" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NameForm;
