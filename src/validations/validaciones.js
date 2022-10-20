

export const tieneCaracteresEspeciales = (cadena) => {
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // /[!@#$%^&*]/;
    return specialChars.test(cadena);
};

export const checkPassword = (password) => { 
//con esta expresión regular validamos si la password contiene almenos una letra minúscula,
//una letra mayúscula, un número, un caracter especial y si tiene una longitud de 8 a 17 caracteres
const expresionRegular=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,17}$/;

return password.match(expresionRegular);

} 



