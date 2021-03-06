import React from "react";
import { Input } from "reactstrap";

export default function InputComponent(props) {
  return (
    <Input
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
    />
  );
}
