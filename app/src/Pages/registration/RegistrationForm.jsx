import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import useRegistration from "../../hooks/use-registration";

const RegistrationForm = () => {
  const { name, step, heading, subheading } = useSelector(
    (state) => state.form.view
  );
  const { renderFormView } = useRegistration();

  return (
    <div className="flex flex-row justify-center mt-7">
      <div className="w-11/12 lg:w-3/4">
        <Header />

        {/*Main component*/}
        <main className="mt-8 grid grid-cols-3 border-t border-gray-500 border-opacity-60">
          <div className="col-span-1 border-r border-gray-500 opacity-60 flex justify-center pt-10">
            <Navigation />
          </div>
          <div className="col-span-2 pt-10 pl-10">
            <div className="text-white">{step}</div>

            <div>
              <div className="text-white font-bold text-3xl py-2">
                {heading}
              </div>
              <div className="text-white text-opacity-60"> {subheading}</div>
            </div>

            <div className="pt-8 border-b border-gray-500"></div>

            <div className="pt-5">{renderFormView(name)}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegistrationForm;
