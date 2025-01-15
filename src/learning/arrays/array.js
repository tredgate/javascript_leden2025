// složka: arrays
// soubor: array

const cities = ["Praha", "Beroun", "Brno", "Ostrava"];
console.log(cities);
console.log(cities[1]); // vypíše druhý člen (index: 1) z array cities

for (let i = 0; i < cities.length; i++) {
  console.log("(for) Město: " + cities[i]);
}

cities.forEach((city) => {
  console.log("(forEach) Město: " + city);
});
