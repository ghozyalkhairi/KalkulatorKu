import React from "react";
import Button from "./shared/Button";

function Inputs() {
  return (
    <React.Fragment>
      <Button inputOperand value="1" />
      <Button inputOperand value="2" />
      <Button inputOperand value="3" />
      <Button clear value="C" />
      <Button inputOperand value="4" />
      <Button inputOperand value="5" />
      <Button inputOperand value="6" />
      <Button del value="DEL" />
      <Button inputOperand value="7" />
      <Button inputOperand value="8" />
      <Button inputOperand value="9" />
      <Button inputOperator value="x" />
      <Button inputOperator value="+" />
      <Button inputOperand zero value="0" />
      <Button inputOperator value="-" />
      <Button inputOperator value="/" />
    </React.Fragment>
  );
}

export default Inputs;
