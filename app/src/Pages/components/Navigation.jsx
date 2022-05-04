import React from "react";
import { useSelector } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { RiPenNibFill } from "react-icons/ri";
import { AiFillTag, AiOutlineMail } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";

const Navigation = () => {
  const { progress } = useSelector((state) => state.form.view);

  const currentIconClassName = (view) => {
    return view === progress ? "bg-green-500" : "bg-slate-500";
  };

  return (
    <nav className="w-full flex ">
      <div className="ml-12 w-4/5 h-full">
        <>
          <div className="stepContainer">
            <div className="text">
              <div className="text-white font-bold">Your name</div>
              <div className="text-white text-sm text-opacity-70">
                Browse and upload
              </div>
            </div>

            <div className={`${currentIconClassName(1)} stepIcon`}>
              <BsFillPersonFill size={22} color="white" />
            </div>
          </div>

          <div className="stepContainer">
            <div className="text">
              <div className="text-white font-bold">Describes</div>
              <div className="text-white text-sm text-opacity-70">
                Browse and upload
              </div>
            </div>

            <div className={`${currentIconClassName(2)} stepIcon`}>
              <FiBookOpen size={22} color="white" />
            </div>
          </div>

          <div className="stepContainer">
            <div className="text">
              <div className="text-white font-bold">Services</div>
              <div className="text-white text-sm text-opacity-70">
                Browse and upload
              </div>
            </div>

            <div className={`${currentIconClassName(3)} stepIcon`}>
              <RiPenNibFill size={22} color="white" />
            </div>
          </div>

          <div className="stepContainer">
            <div className="text">
              <div className="text-white font-bold">Budget</div>
              <div className="text-white text-sm text-opacity-70">
                Browse and upload
              </div>
            </div>

            <div className={`${currentIconClassName(4)} stepIcon`}>
              <AiFillTag size={22} color="white" />
            </div>
          </div>

          <div className="stepContainer">
            <div className="text">
              <div className="text-white font-bold">Complete</div>
              <div className="text-white text-sm text-opacity-70">
                Browse and upload
              </div>
            </div>

            <div className={`${currentIconClassName(5)} stepIcon`}>
              <AiOutlineMail size={22} color="white" />
            </div>
          </div>
        </>
      </div>

      <div className=""></div>
    </nav>
  );
};

export default Navigation;
