// function mostrarmensaje(){
//     alert("BIENVENIDO A MI TARJETA DE PRESENTACION");
// }

// nombre = prompt('Ingrese su nombre: ');
// revez = nombre.length(-1);
function mostrarmensaje(){
    const nombre= document.getElementById("nombreusuario").value;
    const apellido= document.getElementById("apellidousuario"). value;
    const cedula= document.getElementById("cedula"). value;
   
    alert(`INFORMACION INGRESADA .\n

        nombre= ${nombre}.\n
        apellido= ${apellido}.\n
        cedula= ${cedula}.\n`);
}