//parâmetros (atributos) da função Pessoa
function Person(first, last, age, eyecolor) {
  //this cria um novo objeto
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

//Variáveis da função
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather.firstName + " " + myFather.lastName + " " + myFather.eyeColor + " " + myFather.age + " " + myFather.nationality)

console.log(myMother.firstName +" "+ myMother.lastName)


delete person.age;

document.getElementById("demo").innerHTML =
person.firstname + " is " + person.age + " years old.";