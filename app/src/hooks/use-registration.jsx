import React from "react";
import * as Yup from "yup";
import { Field, useField } from "formik";
import { useSelector } from "react-redux";
import BudgetForm from "../Pages/registration/views/BudgetForm";
import CompleteForm from "../Pages/registration/views/CompleteForm";
import DescribeForm from "../Pages/registration/views/DescribeForm";
import NameForm from "../Pages/registration/views/NameForm";
import ServicesForm from "../Pages/registration/views/ServicesForm";

//Validation Schema
const NameValidationSchema = Yup.object({
  name: Yup.string().required("Your name is required.").lowercase().trim(),
});

const DescribeValidationSchema = Yup.object({
  description: Yup.string().required("A description is required"),
});

const ServicesValidationSchema = Yup.object({
  services: Yup.string().required("A service is required"),
});

const BudgetValidationSchema = Yup.object({
  budget: Yup.number().required("A budget is required"),
});

const EmailValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .lowercase()
    .trim(),
});

//Formik helpers
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="text-white pl-1">
        {label}
      </label>
      <input
        className=" appearance-none block w-full py-4 pl-3 text-white mt-2 bg-dark-blue border border-green-500 rounded-2xl  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 pl-1 pt-2">{meta.error}</div>
      ) : null}
    </>
  );
};

const RadioButton = ({ heading, subtext, name, emoji }) => {
  return (
    <div className="pb-4">
      <label className="cursor-pointer">
        <Field
          type="radio"
          name={name}
          value={heading}
          className="peer hidden"
        />
        <div className="peer-checked:border-green-500  border border-gray-500 border-opacity-50 flex py-4 px-4 rounded-md">
          <div className="border border-emoji-blue bg-emoji-blue text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl">
            {emoji}
          </div>

          <div className="pl-4 text-white">
            <div className="font-bold opacity-90">{heading}</div>
            <div className="opacity-60 py-1">{subtext}</div>
          </div>
        </div>
      </label>
    </div>
  );
};

//Slider range
const marks = {
  5000: "5,000",
  12500: "12,500",
  27500: "27,500",
  35000: "35,000",
};

const useRegistration = () => {
  const renderFormView = (name) => {
    switch (name) {
      case "name":
        return <NameForm />;

      case "describe":
        return <DescribeForm />;

      case "services":
        return <ServicesForm />;

      case "budget":
        return <BudgetForm />;

      case "email":
        return <CompleteForm />;

      default:
        return null;
    }
  };

  const data = useSelector((state) => state.form.data);

  return {
    renderFormView,
    NameValidationSchema,
    DescribeValidationSchema,
    ServicesValidationSchema,
    BudgetValidationSchema,
    EmailValidationSchema,
    TextInput,
    RadioButton,
    data,
    marks,
  };
};

export default useRegistration;
