import { CarBlueprint } from "./car_blueprint.js";

//cars.js
const dieselCar = new CarBlueprint("červená", "1.4 TDI", "Diesel");
dieselCar.logCarProperties();
/*
V souboru cars.js na konec souboru vytvořte nový objekt z CarBlueprint do proměnné: electricCar
Barva: Modrá
Motor: EV 160kW
Fuel: Elektřina
Vytvořte volání funkce logCarProperties na novém objektu.
*/
const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina");
electricCar.logCarProperties();
dieselCar.logCarProperties();

const greenCar = new CarBlueprint("Zelená", "1.0 TSI", "Benzín");
console.log("-----------------");
electricCar.logCarProperties();
greenCar.logCarProperties();
dieselCar.logCarProperties();

electricCar.repaint("černá");
electricCar.logCarProperties();
greenCar.logCarProperties();

const brownCar = greenCar;
greenCar.repaint("Růžová");
// jakou barvu bude mít brownCar?
brownCar.logCarProperties();

const brownCarColor = brownCar.getColor();
const dieselCarColor = dieselCar.getColor();

console.log(`Barvy aut: ${brownCarColor}, ${dieselCarColor}`);
