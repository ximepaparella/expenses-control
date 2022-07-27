import { useState } from "react";
import Message from "./Message";

const NewExpense = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    // chequeo si no es un numero y no es mayor a 0 entonces no es válido
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");
      return;
    }
    // Reinicio el mensaje a String vacio si el presupuesto es valido para eliminar el message.
    setMensaje("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añadir presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="añadir" />
        {mensaje && (
          <>
            <Message tipo="error"> {mensaje} </Message>
          </>
        )}
      </form>
    </div>
  );
};

export default NewExpense;
