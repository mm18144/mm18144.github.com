
//DOM

//hacer una busqueda
/*
let links=document.querySelectorAll("a");//buscara la clase container
links.forEach(function(link){
    console.log(link)
})
*/
let celdas=document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);   
    });
});

let cerrar=document.querySelectorAll(".close");
cerrar.forEach(function(cl){
    cl.addEventListener('click',function(){
        console.log("cerrar")
    })
})

//eliminar clases de una etiqueta
/*** 
let iconos=document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("bi-star-fill")
})
*/

/**
//primero obtenemos la clase donde esta el efecto aquitar
let content=document.querySelector('.content');
//quitar las clases de animacion que ya tiene
content.classList.remove("animate__fadeInDown")
content.classList.remove("animate__animated")
//agregar clases para animar su salida fadeOutUp
content.classList.add("animate__fadeOutUp")
content.classList.add("animate__animated")

setTimeout(function(){
    location.href="../index.html";
},600)
 */
