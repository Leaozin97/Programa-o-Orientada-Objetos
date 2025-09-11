console.log("Iniciando um arquivo JS");

// Create an Object
const car = {
  carName: "Miata",
  Type: "Turbinado",
  Year: "2005",
  Color: "gray"
};



// Create new Object
const man = Object.create(car);
    car.modelName = "Catchau";
console.log(car.carName +" "+ car.modelName)