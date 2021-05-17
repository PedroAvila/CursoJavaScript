/* const pi = 3.14159265;

if (true) {
    const nombre = "Enmanuel"
}

console.log(nombre); */

/* const nombre = "Enmanuel";
nombre = "Pedro"; */

const objeto = { nombre: "Enmanuel" };
//objeto = { nombre: "Enmanuel", apellido: "Duran" };
/* objeto.apellido = "Duran";
console.log(objeto.apellido); */

const nuevoObjeto = Object.freeze(objeto);
nuevoObjeto.apellido = "Duran";
console.log(nuevoObjeto);