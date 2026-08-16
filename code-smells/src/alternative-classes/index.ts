interface Loggable {
  toString(): string
}

class Customer implements Loggable {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  toString() {
    return this.getFullName();
  }
}

class Product implements Loggable {
  private _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  getTitle() {
    return this._title;
  }

  toString() {
    return this.getTitle();
  }
}

const log = (obj: Loggable) => {
  console.log(`[logObject] : ${obj.toString()}`);
};

log(new Customer('Ben', 'Bryant'));
log(new Product('Beef Jerky', 5.99))

export {};
