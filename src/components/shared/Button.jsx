import { useContext } from "react";
import CalcContext from "../../context/CalcContext";

function Button({ value, inputOperand, inputOperator, del, clear, zero }) {
  // * Menerima data dari context
  const {
    operandSatu,
    setOperandSatu,
    operandDua,
    setOperandDua,
    setOperator,
    operator,
  } = useContext(CalcContext);
  const checkProp = () => {
    switch (true) {
      // * Cek tombol operand
      case inputOperand:
        // * Cek tombol nol
        if (zero) {
          if (Number(operandSatu) > 0) {
            operator ? null : setOperandSatu((prev) => prev.concat(value));
          }
          if (Number(operandDua) > 0) {
            operator ? setOperandDua((prev) => prev.concat(value)) : null;
          }
        } else {
          operator
            ? setOperandDua((prev) => prev.concat(value))
            : setOperandSatu((prev) => prev.concat(value));
        }
        break;
      // * Cek tombol operator
      case inputOperator:
        if (operandSatu !== "" && operandDua === "") {
          setOperator(value);
        }
        break;
      // * Cek tombol delete
      case del:
        if (operandDua.length) {
          setOperandDua((prev) => prev.slice(0, -1));
        } else if (!operandDua.length && operator.length) {
          setOperator((prev) => prev.slice(0, -1));
        } else if (!operandDua.length && !operator.length) {
          setOperandSatu((prev) => prev.slice(0, -1));
        }
        break;
      // * Cek tombol clear
      case clear:
        setOperandSatu("");
        setOperandDua("");
        setOperator("");
        break;
    }
  };
  return (
    <button
      onClick={checkProp}
      className="transition bg-gray-800 hover:bg-indigo-800 active:scale-110 text-white text-5xl p-4 px-8 rounded-xl"
    >
      {value}
    </button>
  );
}

export default Button;
