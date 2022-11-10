/*import { readlineLib } from 'readline';

class Person {
    constructor(name) {
        this.name = name;
    }
}

const readline = readlineLib.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Wie ist dein Name?", function(input) {
    const person = new Person(input);
    console.log(person.name);
    readline.close();
});
*/

import Person from "./classes/Person.js"; // Person Klasse wird importiert
import readlineLib from "readline"; // Modul "readline" von node importer
import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

// Readline init
const readline = readlineLib.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  // Text für das Hauptmenu
  const question = `
  Was möchtest du machen?
  1: Personen auflisten
  2: Person anlegen
  3: Person suchen
  4: Testperson anlegen
  `;
  readline.question(question, function (answer) {
    if (answer === "1") {
      listPersons();
    } else if (answer === "2") {
      createPerson();
    } else if (answer === "3") {
      searchPerson();
    } else if (answer === "4") {
      createRandomPerson();
    }
  });
}

function listPersons() {
  // Wir wollen alle ausgeben:
  Person.all().forEach(function (person) {
    person.log();
  });

  showMenu();
}

function createPerson() {
  readline.question("Wie lautet der Name?\n", function (name) {
    const person = new Person(uuid(), name);
    person.save();

    showMenu();
  });
}

function searchPerson() {
  readline.question("Wie lautet die ID?\n", function (id) {
    const person = Person.find(id);
    if (person) {
      person.log();
    } else {
      console.log("Person nicht gefunden!");
    }

    showMenu();
  });
}

function createRandomPerson() {
  const person = new Person(uuid(), faker.name.firstName());
  person.save();
  console.log("Folgende Person wurde angelegt:");
  person.log();
  showMenu();
}

showMenu();
