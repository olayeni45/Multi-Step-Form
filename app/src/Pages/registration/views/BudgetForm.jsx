import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { Slider } from "formik-antd";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../redux/slice/form-slice";
import useRegistration from "../../../hooks/use-registration";
import Button from "../../components/UI/Button";
import BackButton from "../../components/UI/BackButton";

const BudgetForm = () => {
  const { BudgetValidationSchema, marks, data } = useRegistration();
  const dispatch = useDispatch();

  const currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const formatter = (value) => currencyFormat.format(value).slice(0, -3) + "+";

  return (
    <Fragment>
      <Formik
        initialValues={data}
        validationSchema={BudgetValidationSchema}
        onSubmit={(values) => dispatch(nextStep(values))}
      >
        <Form className="" action="#" method="POST">
          <div className="pb-4">
            <Slider
              name="budget"
              tooltipVisible
              marks={marks}
              defaultValue={12500}
              min={5000}
              max={35000}
              tipFormatter={formatter}
              className="text-white"
            />
          </div>

          <div className="btn">
            <div>
              <BackButton />
              <Button type="submit" text="Next Step" />
            </div>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default BudgetForm;
