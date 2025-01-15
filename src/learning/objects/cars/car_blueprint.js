export class CarBlueprint {
  constructor(color, engine, fuel) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = 4;
    console.log(
      `Auto bylo vyrobeno. Vlastnosti auta:\n\t motor: ${this.engine} \n\t barva: ${this.color} \n\t Palivo: ${this.fuel}\n\t Počet kol: ${this.wheels}`
    );
  }

  logCarProperties() {
    console.log(
      `Informace o autě:\n\t motor: ${this.engine} \n\t barva: ${this.color} \n\t Palivo: ${this.fuel}\n\t Počet kol: ${this.wheels}`
    );
  }

  repaint(newColor) {
    console.log(`Auto přelakováno z barvy ${this.color} na barvu ${newColor}`);
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
