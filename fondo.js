function cambiarfondo(){
    document.body.style.backgroundColor = generarcolornuevo();
    document.querySelector("h1").innerText = document.body.style.backgroundColor;
function generarcolornuevo(){
    let colorR= Math.random() * 255;
    let colorG= Math.random() * 255;
    let colorB= Math.random() * 255;
    return "rgb("+ colorR +", "+ colorG +", "+ colorB +" )";
}
}