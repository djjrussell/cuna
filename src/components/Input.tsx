import React from "react";

interface InputProps {
  id: string;
  type: string;
  step?: any;
  min?: any;
  max?: any;
  text: string;
  action: (action: string) => void;
}

export const Input = ({
  id,
  type,
  step,
  min,
  max,
  text,
  action
}: InputProps) => {
  return (
    <label>
      <h5>{text}</h5>
      <input
        className="main_input"
        id={id}
        name={id}
        type={type}
        min={min}
        max={max}
        step={step}
        onChange={(e) => action(e.target.value)}
      />
    </label>
  );
};
