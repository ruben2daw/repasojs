//RECORRER PROPIEDADES OBJETOS

function recorrer_atributos_obj(){

var person = {
name : "juan",
age : 45,
phone : "3223"
};

for(var field in person){
console.log(field+ " =" +person[field]);
}

}

recorrer_atributos_obj();