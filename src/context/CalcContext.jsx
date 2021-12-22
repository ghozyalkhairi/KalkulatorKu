import { createContext, useState } from "react";

// * Membuat context
const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [operandSatu, setOperandSatu] = useState("");
  const [operandDua, setOperandDua] = useState("");
  const [operator, setOperator] = useState("");
  const [hasil, setHasil] = useState("");
  return (
    <CalcContext.Provider
      value={{
        operandSatu,
        setOperandSatu,
        operandDua,
        setOperandDua,
        operator,
        setOperator,
        hasil,
        setHasil,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContext;
