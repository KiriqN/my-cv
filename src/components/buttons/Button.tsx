import React from "react";

interface ButtonProps {
  buttonClass: string;
  label: string;
}

function Button(props: ButtonProps) {
  return (
    <div className="">
      <button className={props.buttonClass}>{props.label}</button>
    </div>
  );
}

export default Button;
