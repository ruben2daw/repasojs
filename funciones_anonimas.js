FUNCION ANONIMA;
variable de tipo function y forma de llamar como una funcion

var totalPrice = function( unidades, precio){
return unidades * precio;
}

//LLAMADA NORMAL PARA EJECCUTAR
console.log( totalPrice(3,4));

//LAMADA QUE NOS DEVOLVERIA QUE ES DE TIPO FUNCTION
console.log( typeof totalPrice);

//LAMADA QUE NOS DEVOLVERIA QUE ES DE TIPO NUMBER
console.log( typeof totalPrice(3,4));