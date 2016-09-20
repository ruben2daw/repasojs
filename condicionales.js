CONDICIONALES
var total_ifelse = function( unidades, precio){

var total=0;
if(precio<100){
console.log("menor que 100");
}else if(precio <50){
console.log("menor que 100");
}else{
console.log("ninguna");
}

}

var totalswitch = function( valor){

switch(valor){
case 1: console.log("NUMERO 1");
break;
case 2: console.log("NUMERO 2");
break;

  case 3:
   console.log("NUMERO 3");
  break;

  default:
  console.log("Rango invalido");
  break;
}

}