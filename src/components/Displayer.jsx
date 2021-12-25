import { useContext, useEffect } from "react";
import CalcContext from "../context/CalcContext";

function Displayer() {
  // * Menerima data dari context
  const {
    operandSatu,
    operandDua,
    operandTiga,
    operandEmpat,
    operatorSatu,
    operatorDua,
    operatorTiga,
    hasil,
    setHasil,
    hasilDua,
    setHasilDua,
    hasilTiga,
    setHasilTiga,
  } = useContext(CalcContext);
  useEffect(() => {
    // * Menghitung operand
    switch (true) {
      case operandSatu !== "" && operandDua === "":
        setHasil(operandSatu);
        break;
      case operandDua !== "" && operandTiga === "":
        if (operatorSatu === "+") {
          setHasil(Number(operandSatu) + Number(operandDua));
        } else if (operatorSatu === "-") {
          setHasil(Number(operandSatu) - Number(operandDua));
        } else if (operatorSatu === "x") {
          setHasil(Number(operandSatu) * Number(operandDua));
        } else if (operatorSatu === "/") {
          setHasil(Number(operandSatu) / Number(operandDua));
        }
        break;
      case operandTiga !== "" && operatorTiga === "" && operandEmpat === "":
        if (operatorDua === "+") {
          setHasilDua(hasil + Number(operandTiga));
        } else if (operatorDua === "-") {
          setHasilDua(hasil - Number(operandTiga));
        } else if (operatorDua === "x") {
          setHasilDua(hasil * Number(operandTiga));
        } else if (operatorDua === "/") {
          setHasilDua(hasil / Number(operandTiga));
        }
        break;
      case operandTiga !== "" && operandEmpat !== "":
        if (operatorTiga === "+") {
          setHasilTiga(hasilDua + Number(operandEmpat));
        } else if (operatorTiga === "-") {
          setHasilTiga(hasilDua - Number(operandEmpat));
        } else if (operatorTiga === "x") {
          setHasilTiga(hasilDua * Number(operandEmpat));
        } else if (operatorTiga === "/") {
          setHasilTiga(hasilDua / Number(operandEmpat));
        }
        break;
    }
  }, [operandSatu, operandDua, operandTiga, operandEmpat]);
  return (
    <div className="col-span-4 rounded-xl p-4 bg-gray-900 mb-2">
      <div className="flex flex-col gap-2">
        {operandSatu ? (
          <p className="text-white text-6xl self-center">
            {operandSatu} {operatorSatu} {operandDua} {operatorDua}{" "}
            {operandTiga} {operatorTiga} {operandEmpat}
          </p>
        ) : (
          <p className="text-white text-6xl italic self-center">
            Kalkulator Sederhana
          </p>
        )}
        {!operandSatu && !operandTiga && !operandEmpat && (
          <p className="text-gray-300 text-5xl self-end"> =0</p>
        )}
        {operandSatu && !operandTiga && !operandEmpat && (
          <p className="text-gray-300 text-5xl self-end"> ={hasil}</p>
        )}
        {operandDua && operandTiga && !operandEmpat && (
          <p className="text-gray-300 text-5xl self-end"> ={hasilDua}</p>
        )}
        {operandDua && operandTiga && operandEmpat && (
          <p className="text-gray-300 text-5xl self-end"> ={hasilTiga}</p>
        )}
      </div>
    </div>
  );
}

export default Displayer;
