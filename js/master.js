//voy a crear un array con varias provincias
//                 0          1         2
let provincias = ["cordoba","mendoza","jujuy","catamarca"]
// capturando un elemento de mi html
let lista = document.querySelector("ul")
// vamos a recorrer el array de provoincias,usamos ciclo for
for(let i = 0;i < provincias.length;i++){
    lista.innerHTML +=`<li>${provincias[i]} </li>`

}
//capturando un elemento en html
let titulo = document.querySelector("#titulo")
titulo.style.color="red"