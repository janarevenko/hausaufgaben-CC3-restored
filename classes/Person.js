import { persons as personsData } from "../data/person_data.js";

export default class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static all() {
    // personsData.forEach(function(personData) {
    //   const person = new Person(personData.id, personData.name)
    //   console.log(person.name)
    // })

    // let persons = []
    // for (let i=0; i<personsData.length; i++) {
    //   const person = new Person(personsData[i].id, personsData[i].name)
    //   persons.push(person)
    // }

    // return persons

    return personsData.map(function (personData) {
      return new Person(personData.id, personData.name);
    });
  }

  static find(id) {
    const data = personsData.find(function (personData) {
      return personData.id === id;
    });
    if (data) {
      return new Person(data.id, data.name);
    }
    return null;
  }

  log() {
    console.log(`- (${this.id}) ${this.name}`);
  }

  save() {
    personsData.push({
      id: this.id,
      name: this.name,
    });
  }
}
