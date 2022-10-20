import React, { useState } from "react";
import "../styles/form.css";
import hello from "../images/hello.jpg";
import { tieneCaracteresEspeciales, checkPassword } from "../validations/validaciones";
import Mensaje from "./Mensaje";

const Form = () => {

  const [usuario, setUsuario] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });

  const [mensaje, setMensaje] = useState("");

  const [tipoMensaje, setTipoMensaje] = useState("");

  const objetoValido = () => {
   

    //evalúa que todos los campos hayan sido diligenciados, es decir, que no sean una cadena sin caracteres
    if(usuario.userName.trim().length === 0 || usuario.password.trim().length === 0 
    || usuario.confirmPassword.trim().length === 0 || usuario.mobileNumber.trim().length === 0){
      console.log("Error! todos los campos deben ser diligenciados");
      setMensaje("Error! todos los campos deben ser diligenciados");
      return false;
    }
    //evalúa que el username ingresado no tenga caracteres especiales
    if(tieneCaracteresEspeciales(usuario.userName)){
      console.log("Error! el username ingresado \"" + usuario.userName + "\" no puede tener caracteres especiales");
      setMensaje("Error! el username ingresado \"" + usuario.userName + "\" no puede tener caracteres especiales");
      return false;
    }
    //evalúa que el username tenga una longitud entre 5 y 15 caracteres
    if(usuario.userName.length < 5 || usuario.userName.length > 15){
      setMensaje("Error! el username debe tener un número de caracteres mayor o igual que 5 y menor o igual que 15");
      console.log(mensaje);
      return false;
    }
    //evalúa si la password contiene almenos una letra minúscula,
    //una letra mayúscula, un número, un caracter especial y si tiene una longitud de 8 a 17 caracteres
    if(!checkPassword(usuario.password)){
      setMensaje("Error! la password debe tener un número de caracteres mayor o igual que 8 y menor o igual que 17, " +
      "un número, una letra minúscula, una letra mayúscula y un caracter especial");
      console.log(mensaje);
      return false;
    }
    //si la condición anterior no se cumple, es porque la password es correcta, entonces si esta tampoco se cumple
    //es porque password y confirmPassword son exactamente iguales y habiendo cumplido con los estándares la password, 
    //es válida también confirmPassword
    if(usuario.password !== usuario.confirmPassword){
      setMensaje("Error! las password ingresadas deben coincidir");
      console.log(mensaje);
      return false;
    }

    if(!Number.isInteger(parseFloat(usuario.mobileNumber))){
      setMensaje("Error! el mobile number debe ser un número entero");
      console.log(mensaje);
      return false;
    }

    if(parseInt(usuario.mobileNumber) < 3000000000 || parseInt(usuario.mobileNumber) > 3239999999){
      setMensaje(
        "Error! el mobile number debe ser un número entero mayor que 300 000 00 00 y menor o igual que 323 999 99 99"
        );
      console.log(mensaje);
      return false;
    }

    return true;

  }
  const registrarUsuario = (evento) => {
    evento.preventDefault();

    if(objetoValido()){//en caso de que sea verdadero, entonces se procede a registrar el usuario
      localStorage.setItem('usuario', JSON.stringify(usuario));
      console.log(JSON.parse(localStorage.getItem('usuario')));
      setMensaje("¡Se ha registrado satisfactoriamente!");
      setTipoMensaje("mensajeexitoso");
    }else{
      setTipoMensaje("mensajefallido");
    }

    
  }


  return (
    <section className="form__container">
      <div className="form__col1">
        <h1 className="col1__title">Sign In</h1>
        <span className="col1__span">Register and enjoy the service</span>

        <form className="col1__form" onSubmit={registrarUsuario}>
          
          <input
            type="text"
            className="col1__input"
            placeholder="username"
            onChange={(evento) => {
              setUsuario({
                ...usuario,
                userName: evento.target.value
              });

              // localStorage.setItem('usuario', JSON.stringify(usuario));
              // let user = JSON.parse(localStorage.getItem('usuario'));


            }}
          />
          <input type="password" className="col1__input" placeholder="password" 
          onChange={(evento) => {
            setUsuario({
              ...usuario,
              password: evento.target.value
            })
          }}
          />
          <input type="password" className="col1__input" placeholder="confirm password" 
          onChange={(evento) => {
            setUsuario({
              ...usuario,
              confirmPassword: evento.target.value
            });
          }}
          />
          <input type="text" className="col1__input" placeholder="mobile number" 
          onChange={(evento) => {
            setUsuario({
              ...usuario,
              mobileNumber: evento.target.value
            });
          }}
          />
          <button className="col1__button">Sign In</button>
        </form>
      </div>
      <div className="form__col2">
        <img src={hello} alt="" className="col2__img" />
      </div>

      <Mensaje tipoEstilo={tipoMensaje} mensaje={mensaje}/> 
    </section>
  );
};

export default Form;
