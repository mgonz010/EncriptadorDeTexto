//------- Variables -------//

const btnEncriptar = document.querySelector(".boton_encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".mensaje_restriccion");
const respuesta = document.querySelector(".encriptado");
const contenido = document.querySelector(".contenedor_salida");
const btnCopiar = document.querySelector(".boton_copiar");
const btnDesencriptar = document.querySelector(".boton_desencriptar");

//  -------   Boton de Encriptar   -------  //

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == "" || texto !== txt || texto !== texto.toLowerCase()){
        aviso.textContent = "¡ No ingreso texto para encriptar o ingresó un caracter especial !";
    }else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        txtEncriptar.value = "";
    }
});

//  --------    Boton de Desencriptar   --------  //

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == "" || texto !== txt || texto !== texto.toLowerCase()){
        aviso.textContent = "¡ No ingreso texto para encriptar o ingresó un caracter especial !";
    }else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
        txtEncriptar.value = ""; 
    } 
});

//  -------  Boton de Copiar  -------  //

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});
