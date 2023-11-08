var gastoTotal = 500;

var caja1 = 100;
var jarabe1 = 100;
var expectorante1 = 150;
var iva1 = 0.1;
var colectivo1 = 0;
var nombre1 = "Marzocca";

var caja2 = 90;
var jarabe2 = 140;
var expectorante2 = 100;
var iva2 = 0.15;
var colectivo2 = 0;
var nombre2 = "Florit";
/*
function farmacia1(){
    var gastoFarmacia1 = (caja*2+jarabe+expectorante)+(caja*2+jarabe+expectorante)*iva1
    console.log("En la farmacia 1 gasta: " + gastoFarmacia1);
    return gastoFarmacia1;
}

function farmacia2(){
    var colectivo = 5;
    var gastoFarmacia2 = (caja2*2+jarabe2+expectorante2)+(caja2*2+jarabe2+expectorante2)*iva2+colectivo
    console.log("En la farmacia 2 gasta: " + gastoFarmacia2);
    return gastoFarmacia2;
}

*/
function farmacia(cole, cajas, exp, jarabe, iva, nombre){
  let gasto = (cajas*2 + jarabe + exp) + (cajas*2 + jarabe + exp)*iva + cole;
  console.log("En la farmacia "+nombre+" gasta: " + gasto);
    return gasto;
}

let f1 = farmacia(colectivo1, caja1, expectorante1, jarabe1, iva1, nombre1);

let f2 = farmacia(colectivo2, caja2, expectorante2, jarabe2, iva2, nombre2);

if (f1 > f2)
  console.log("Tenes que ir a "+nombre2)
else 
  console.log("Tenes que ir a "+nombre1)


/*
farmacia1();
farmacia2();
var f1 = farmacia1();
var f2 = farmacia2();

if (f1  < f2)
    console.log("Conviene comprar en Farmacia UNO")
else 
    console.log("Conviene comprar en Farmacia DOS")
*/

