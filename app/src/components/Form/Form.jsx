import React from "react";
import { useSelector } from "react-redux";
import NameForm from "./NameForm";
import ServicesForm from "./ServicesForm";
import BudgetForm from "./BudgetForm";
import DescribeForm from "./DescribeForm";
import CompleteForm from "./CompleteForm";

const Form = () => {
  const { step } = useSelector((state) => state.step);
  let formContainer, heading, subheading;

  switch (step) {
    case 1:
      formContainer = <NameForm />;
      heading = "Let's start with your name";
      subheading =
        "Please fill in the details below so that we can get in contact with you about our product.";
      break;

    case 2:
      formContainer = <DescribeForm />;
      heading = "What best describes you?";
      subheading = "Please let us know what type of business describes you.";
      break;

    case 3:
      formContainer = <ServicesForm />;
      heading = "What services are you looking for?";
      subheading = "Please let us know what type of business describes you.";
      break;

    case 4:
      formContainer = <BudgetForm />;
      heading = "Please select your budget.";
      subheading = "Please let us know the budget for your project.";
      break;

    case 5:
      formContainer = <CompleteForm />;
      heading = "Complete submission";
      subheading =
        "Thanks for taking the time to complete this form. Please enter your email below and we will be in contact within 24 hours.";
      break;

    default:
      formContainer = null;
      heading = null;
      subheading = null;
  }

  return (
    <div className="w-11/12">
      <div className="text-white"> Step {step}/5 </div>

      <div>
        <div className="text-white font-bold text-3xl pb-2">{heading}</div>
        <div className="subheading">{subheading}</div>
      </div>

      <div className="pt-8 border-b border-gray-500"></div>

      <div className="pt-5">{formContainer}</div>
    </div>
  );
};

export default Form;
