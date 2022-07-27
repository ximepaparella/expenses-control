import React from "react";
import Expense from "./Expense";

const ExpensesList = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.lenght > 0 ? "Gastos" : "Aun no hay gastos"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Expense
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {" "}
            {gastos.lenght > 0 ? "Gastos" : "No hay gastos en esta categoria"}
          </h2>
          {gastos.map((gasto) => (
            <Expense
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
