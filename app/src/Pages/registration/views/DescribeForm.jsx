import React, { Fragment } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import Button from "../../components/UI/Button";
import BackButton from "../../components/UI/BackButton";
import { useDispatch } from "react-redux";
import useRegistration from "../../../hooks/use-registration";
import { nextStep } from "../../../redux/slice/form-slice";

const DescribeForm = () => {
  const { DescribeValidationSchema, data, RadioButton } = useRegistration();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Formik
        initialValues={data}
        validationSchema={DescribeValidationSchema}
        onSubmit={(values) => dispatch(nextStep(values))}
      >
        {({ isValid }) => (
          <Form className="" action="#" method="POST">
            <div role="group">
              <RadioButton
                heading="New Business"
                subtext="Started trading within the last 12 months"
                name="description"
                emoji="🥳"
              />

              <RadioButton
                heading="Existing Business"
                subtext="Have been operating beyond 12 months."
                name="description"
                emoji="😎"
              />
            </div>

            <div className="text-red-500 pl-1">
              <ErrorMessage name="description" />
            </div>

            <div className="btn">
              <div>
                <BackButton />
                <Button type="submit" text="Next Step" disabled={!isValid} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default DescribeForm;
