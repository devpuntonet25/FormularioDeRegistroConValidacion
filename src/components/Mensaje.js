import react from "react";

const Mensaje = ( { tipoEstilo, mensaje } ) => {

  const definirEstilo = () => {
    let estilo = "";

    switch (tipoEstilo.toLowerCase()) {
      case "mensajefallido":
        estilo = "form__mensaje--fallido";
        break;
      case "mensajeexitoso":
        estilo = "form__mensaje--exitoso";
        break;
      default:
        estilo = "";
        break;
    }
    return estilo;
  };

  return (
  <div className={definirEstilo()}>
    {mensaje}
  </div>
  );

};

export default Mensaje;
