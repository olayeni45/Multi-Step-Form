import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="flex flex-row justify-center mt-7">
      <div className="w-11/12 lg:w-4/5">
        <Header />

        {/*Main component*/}
        <main className="mt-10 h-fit grid grid-cols-3 border-t-2 border-gray-500">
          <div className="col-span-1 border-r border-gray-500 flex justify-center pt-10">
            <Navigation />
          </div>
          <div className="col-span-2 pt-10 pl-10">
            <Form />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
