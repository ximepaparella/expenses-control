import React from "react";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    // calcular % gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const resultado = confirm("¿Deseas reiniciar el presupuesto y los gastos?");

    if (resultado) {
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#dc2626" : "#3b82fc",
            trailColor: "#f5f5f5",
            textColor: porcentaje > 100 ? "#dc2626" : "#3b82fc",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear app
        </button>
        <p>
          <span> Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span> Disponible:</span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span> Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
