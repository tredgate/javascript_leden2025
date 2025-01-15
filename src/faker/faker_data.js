// faker_data.js
// složka: faker
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const username = faker.internet.userName({
  firstName: firstName,
  lastName: lastName,
});
const email = faker.internet.email({
  firstName: firstName,
  lastName: lastName,
  provider: "seznam.cz",
});

console.log(firstName);
console.log(lastName);
console.log(username);
console.log(email);
