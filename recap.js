class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

   /* fullName(){
        this.fullName = this.firstName;
        return fullName;
    }
    */
   
    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    isOlderThan(person) {
       /* if (this.age > person.age) {
            return true
        } else {
            return false */
        return this.age > person.age;
    }
}


const person = new Person("Peter","Lustig",35);

/* let personOne = new Person("Max", "Mustermann", 22);
let personTwo = new Person("Sophie","Keller", 20);
let personThree = new Person("Jonas","Hagen", 27);
let personFour = new Person("Bianca","Grün", 25);

print(personFour.age);
print(personFour.firstName);
print(personOne.fullName);
*/
console.log(person.fullname);