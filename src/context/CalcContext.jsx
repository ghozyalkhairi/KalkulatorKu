import { createContext, useState } from "react";

// * Membuat context
const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [operandSatu, setOperandSatu] = useState("");
  const [operandDua, setOperandDua] = useState("");
  const [operandTiga, setOperandTiga] = useState("");
  const [operandEmpat, setOperandEmpat] = useState("");
  const [operatorSatu, setOperatorSatu] = useState("");
  const [operatorDua, setOperatorDua] = useState("");
  const [operatorTiga, setOperatorTiga] = useState("");
  const [hasil, setHasil] = useState("");
  const [hasilDua, setHasilDua] = useState("");
  const [hasilTiga, setHasilTiga] = useState("");
  return (
    <CalcContext.Provider
      value={{
        operandSatu,
        setOperandSatu,
        operandDua,
        setOperandDua,
        operandTiga,
        setOperandTiga,
        operandEmpat,
        setOperandEmpat,
        operatorSatu,
        setOperatorSatu,
        operatorDua,
        setOperatorDua,
        operatorTiga,
        setOperatorTiga,
        hasil,
        setHasil,
        hasilDua,
        setHasilDua,
        hasilTiga,
        setHasilTiga,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContext;
