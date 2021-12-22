import { useContext, useEffect } from "react";
import CalcContext from "../context/CalcContext";

function Displayer() {
  // * Menerima data dari context
  const { operandSatu, operator, operandDua, hasil, setHasil } =
    useContext(CalcContext);
  useEffect(() => {
    // * Menghitung kedua operand
    switch (operator) {
      case "+":
        setHasil(Number(operandSatu) + Number(operandDua));
        break;
      case "-":
        setHasil(Number(operandSatu) - Number(operandDua));
        break;
      case "x":
        setHasil(Number(operandSatu) * Number(operandDua));
        break;
      case "/":
        setHasil(Number(operandSatu) / Number(operandDua));
        break;
    }
  }, [operandDua]);
  return (
    <div className="col-span-4 rounded-xl p-4 bg-gray-900 mb-2">
      <div className="flex flex-col gap-2">
        {operandSatu ? (
          <p className="text-white text-6xl self-center">
            {operandSatu} {operator} {operandDua}
          </p>
        ) : (
          <p className="text-white text-6xl italic self-center">
            Kalkulator Sederhana
          </p>
        )}
        {operandSatu && operator && operandDua ? (
          <p className="text-gray-300 text-5xl self-end"> ={hasil}</p>
        ) : (
          <p className="text-gray-300 text-5xl self-end"> = 0</p>
        )}
      </div>
    </div>
  );
}

export default Displayer;
