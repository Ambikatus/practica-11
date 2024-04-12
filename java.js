 //array:tipo de variable que puede contener multiples valores
    //en js el array puede ser de varios tipos de datos
var edades = [10, 5, 8,45,2,85,15,14];
var nombres = ['tilin', 'michin', 'chilin','pichin'];
var variado = [25,'lechuga', true,'hola', 69];

/*console.log(edades); // muestra el array de edades

console.log(edades[2]); //muestra el elemento en la posicion
for(var j=0;j<edades.length;j++){
    console.log(edades[j]);//muestra cada elemento del array por separado
}
for(var i=0;i<nombres.length;i++){
   console.log(nombres[i]);
}

for (var n=0;n<variado.length;n++) {
    console.log(variado[n]);
}

//añadir elementos a un array
nombres.push('luchin');
for(var i=0;i<nombres.length;i++){
    console.log(nombres[i]);
 }

 //elimina primer elemento del array
 nombres.shift( );
 console.log(nombres);

 //elimina el ultimo elemento del array 
 nombres.pop();
 console.log(nombres);

 var opciones = '';
 for (var j=0;j<nombres.length;j++){
    opciones += '<option value="' + j +  '">' + nombres[j] + '</option>';
 }
 document.querySelector('#opciones').innerHTML = opciones;

 let array1 = [3,7,9];
let array2 = [1,2,5];
let array3 = [];
for (let i=0;i<array1.length;i++){
    array3.push(array1[i]+array2[i]) ;
}
console.log(array3);

//saber el indice de un elemento del array
console.log(edades.indexOf(45));*/

var opciones = '';
var filas = '';
var nom = [];
for(var j=0;j<nombres.length;j++){
    opciones += '<option value="'+j+'">'+nombres[j]+'</option>';
    filas += '<tr><td>'+(j+1)+'</td><td>'+nombres[j]+'</td></tr>';
}
document.querySelector('#opciones').innerHTML = opciones;
document.querySelector('#tabla').innerHTML = filas;