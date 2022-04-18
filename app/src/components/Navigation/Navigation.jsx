import React from "react";
import Icon from "../UI/Icon";
import { navigationIcons } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { jumpToStep } from "../../redux/slice/step-slice";

const Navigation = () => {
  const { step } = useSelector((state) => state.step);
  const dispatch = useDispatch();

  return (
    <nav className="w-4/5 lg:w-8/12">
      {navigationIcons.map((icon, index) => (
        <Icon
          key={index}
          heading={icon.heading}
          svg={icon.svg}
          onIconClick={() => dispatch(jumpToStep(index + 1))}
        />
      ))}
    </nav>
  );
};

export default Navigation;
