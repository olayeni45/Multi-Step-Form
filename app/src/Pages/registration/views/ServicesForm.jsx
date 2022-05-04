import React, { Fragment } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import Button from "../../components/UI/Button";
import BackButton from "../../components/UI/BackButton";
import { useDispatch } from "react-redux";
import useRegistration from "../../../hooks/use-registration";
import { nextStep } from "../../../redux/slice/form-slice";

const ServicesForm = () => {
  const { ServicesValidationSchema, data, RadioButton } = useRegistration();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Formik
        initialValues={data}
        validationSchema={ServicesValidationSchema}
        onSubmit={(values) => dispatch(nextStep(values))}
      >
        {({ isValid }) => (
          <Form className="" action="#" method="POST">
            <div role="group">
              <RadioButton
                heading="Website Development"
                subtext="Development of Webflow Website"
                name="services"
                emoji="🧠"
              />

              <RadioButton
                heading="Existing Business"
                subtext="Development of Website Design"
                name="services"
                emoji="👻"
              />
            </div>

            <div className="text-red-500 pl-1">
              <ErrorMessage name="services" />
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

export default ServicesForm;
