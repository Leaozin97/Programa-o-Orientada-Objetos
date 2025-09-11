const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

//Campo para deletar o parâmetro desejado
delete person.age;

console.log("O nome é:" +person.firstname,person.age)