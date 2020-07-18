class Person {
 constructor(nationality, name) {
  this.nationality = nationality;
  this.name = name;

  let first, last;
  ({first, last} = this.name);
  
  /* Automatic */
  /* console.log(this.greeting()); */

 }



 // Properties
 greeting() {
  let first,last;
  ({first, last} = this.name);

  return `Im ${this.nationality} and my name is ${first}`;
 }

}

//Instantiate
const person = new Person('Asian', {
 first: 'Ralph',
 last: 'Esteva'
});
//Display output
/* console.log(person.greeting()); */
