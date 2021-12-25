import { useContext } from "react";
import CalcContext from "../../context/CalcContext";

function Button({ value, inputOperand, inputOperator, del, clear, zero }) {
  // * Menerima data dari context
  const {
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
    setHasil,
    setHasilDua,
    setHasilTiga,
  } = useContext(CalcContext);
  const checkProp = () => {
    switch (true) {
      // * Cek tombol operand
      case inputOperand:
        // * Cek tombol nol
        if (zero) {
          if (Number(operandSatu) > 0) {
            operatorSatu ? null : setOperandSatu((prev) => prev.concat(value));
          }
          if (Number(operandDua) > 0) {
            !operatorDua && !operatorTiga
              ? setOperandDua((prev) => prev.concat(value))
              : null;
          }
          if (Number(operandTiga) > 0) {
            operatorDua && !operatorTiga
              ? setOperandTiga((prev) => prev.concat(value))
              : null;
          }
          if (Number(operandEmpat) > 0) {
            operatorTiga ? setOperandEmpat((prev) => prev.concat(value)) : null;
          }
        } else {
          !operatorSatu && !operatorDua && !operatorTiga
            ? setOperandSatu((prev) => prev.concat(value))
            : null;
          operatorSatu && !operatorDua && !operatorTiga
            ? setOperandDua((prev) => prev.concat(value))
            : null;
          operatorSatu && operatorDua && !operatorTiga
            ? setOperandTiga((prev) => prev.concat(value))
            : null;
          operatorSatu && operatorDua && operatorTiga
            ? setOperandEmpat((prev) => prev.concat(value))
            : null;
        }
        break;
      // * Cek tombol operator
      case inputOperator:
        if (
          operandSatu !== "" &&
          operandDua === "" &&
          operandTiga === "" &&
          operandEmpat === ""
        ) {
          setOperatorSatu(value);
        } else if (
          operandSatu !== "" &&
          operandDua !== "" &&
          operandTiga === "" &&
          operandEmpat === ""
        ) {
          setOperatorDua(value);
        } else if (
          operandSatu !== "" &&
          operandDua !== "" &&
          operandTiga !== "" &&
          operandEmpat === ""
        ) {
          setOperatorTiga(value);
        }
        break;
      // * Cek tombol delete
      case del:
        if (operandEmpat) {
          setOperandEmpat((prev) => prev.slice(0, -1));
        } else if (
          !operandEmpat &&
          operatorTiga &&
          operandTiga &&
          operatorDua &&
          operandDua &&
          operatorSatu &&
          operandSatu
        ) {
          setOperatorTiga((prev) => prev.slice(0, -1));
        } else if (
          !operandEmpat &&
          !operatorTiga &&
          operandTiga &&
          operatorDua &&
          operandDua &&
          operatorSatu &&
          operandSatu
        ) {
          setOperandTiga((prev) => prev.slice(0, -1));
        } else if (
          !operandEmpat &&
          !operatorTiga &&
          !operandTiga &&
          operatorDua &&
          operandDua &&
          operatorSatu &&
          operandSatu
        ) {
          setOperatorDua((prev) => prev.slice(0, -1));
        } else if (
          !operandEmpat &&
          !operatorTiga &&
          !operandTiga &&
          !operatorDua &&
          operandDua &&
          operatorSatu &&
          operandSatu
        ) {
          setOperandDua((prev) => prev.slice(0, -1));
        } else if (
          !operandEmpat &&
          !operatorTiga &&
          !operandTiga &&
          !operatorDua &&
          !operandDua &&
          operatorSatu &&
          operandSatu
        ) {
          setOperatorSatu((prev) => prev.slice(0, -1));
        } else if (
          !operandEmpat &&
          !operatorTiga &&
          !operandTiga &&
          !operatorDua &&
          !operandDua &&
          !operatorSatu &&
          operandSatu
        ) {
          setOperandSatu((prev) => prev.slice(0, -1));
        }
        break;
      // * Cek tombol clear
      case clear:
        setOperandSatu("");
        setOperandDua("");
        setOperandTiga("");
        setOperandEmpat("");
        setOperatorSatu("");
        setOperatorDua("");
        setOperatorTiga("");
        setHasil("0");
        setHasilDua("0");
        setHasilTiga("0");
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
