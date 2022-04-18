import React from "react";
import * as Yup from "yup";
import { useField } from "formik";

//Validation Schema
export const NameValidationSchema = Yup.object({
  name: Yup.string().required("Your name is required.").lowercase().trim(),
});

export const DescribeValidationSchema = Yup.object({
  describes: Yup.string().oneOf(
    ["New Business", "Existing Business"],
    "Invalid Description"
  ),
});

export const ServicesValidationSchema = Yup.object({
  services: Yup.string().oneOf(
    ["Website Development", "Existing Business"],
    "Invalid Service"
  ),
});

export const BudgetValidationSchema = Yup.object({
  budget: Yup.number().min(0, "Budget cannot be negative"),
});

export const EmailValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .lowercase()
    .trim(),
});

//Input field
export const TextInput = ({ label, ...props }) => {
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
