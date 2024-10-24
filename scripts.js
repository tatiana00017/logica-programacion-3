function factorial(){
    const textarea = document.getElementById("textareav");
    const num = parseInt(textarea.value);
    let acum=1;
    for(let i=1; i<=num; i++ ){
        acum *= i;
    }
    console.log("Esto es acum total "+ acum);
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "<h2>El factorial de " + num + " es " + acum + "</h2>";
}

document.addEventListener("DOMContentLoaded", function(){
    const boton =document.getElementById("boton");
    boton.addEventListener("click",factorial);
})