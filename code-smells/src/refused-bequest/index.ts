class Tank {
  private _capacity: number;
  private _currentLiters: number;

  constructor(capacity: number, currentLiters?: number) {
    this._capacity = capacity;
    this._currentLiters = currentLiters || 0;
  }

  fill(liters: number) {
    this._currentLiters += liters;
  }

  consume(liters: number) {
    this._currentLiters -= liters;
  }
}

interface Movable {
  move(distance: number): void;
}

interface HasTank {
  fillTank(amount: number): void;
}

class Car implements Movable, HasTank {
  private _tank: Tank;
  private _kmsPerLiter: number;

  constructor(tank: Tank, kmsPerLiter?: number) {
    this._tank = tank;
    this._kmsPerLiter = kmsPerLiter || 10;
  }

  fillTank(liters: number) {
    this._tank.fill(liters);
  }

  move(kilometers: number) {
    const consumedFuel = kilometers / this._kmsPerLiter;
    this._tank.consume(consumedFuel);
    console.log(`Car travelled ${kilometers}km`);
  }
}

class Truck implements Movable, HasTank {
  private _tank: Tank;
  private _kmsPerLiter: number;

  constructor(tank: Tank, kmsPerLiter?: number) {
    this._tank = tank;
    this._kmsPerLiter = kmsPerLiter || 10;
  }

  fillTank(liters: number) {
    this._tank.fill(liters);
  }

  move(kilometers: number) {
    const consumedFuel = kilometers / this._kmsPerLiter;
    this._tank.consume(consumedFuel);
    console.log(`Truck travelled ${kilometers}km`);
  } 
}

class Bicycle implements Movable {
  move(kilometers: number) {
    console.log(`Bike travelled ${kilometers}km`);
  }
}

const bike = new Bicycle();
const car = new Car(new Tank(100), 30);
const truck = new Truck(new Tank(300), 20);

export {};
