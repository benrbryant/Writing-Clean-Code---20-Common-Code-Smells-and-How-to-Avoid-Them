interface Operation {
  calculate(oldValue: number, newValue: number): number;
  print(oldValue: number, newValue: number): void;
}

class Add implements Operation {
  calculate(oldValue: number, newValue: number): number {
    return oldValue + newValue;
  }
  print(oldValue: number, newValue: number): void {
    console.log(`${oldValue} plus ${newValue}`);
  }
}

class Subtract implements Operation {
  calculate(oldValue: number, newValue: number): number {
    return oldValue - newValue;
  }
  print(oldValue: number, newValue: number): void {
    console.log(`${oldValue} minus ${newValue}`);
  }
}

class Multiply implements Operation {
  calculate(oldValue: number, newValue: number): number {
    return oldValue * newValue;
  }
  print(oldValue: number, newValue: number): void {
    console.log(`${oldValue} multiplied by ${newValue}`);
  }
}

class Divide implements Operation {
  calculate(oldValue: number, newValue: number): number {
    return oldValue / newValue;
  }
  print(oldValue: number, newValue: number): void {
    console.log(`${oldValue} divided by ${newValue}`);
  }
}

class Calculator {
  private _operations: { operation: Operation; oldValue: number; value: number }[] = [];
  private _currentValue: number;

  constructor(initialValue: number) {
    this._currentValue = initialValue;
  }

  execute(operation: Operation, newValue: number) {
    this._operations.push({ operation, oldValue: this._currentValue, value: newValue });
    this._currentValue = operation.calculate(this._currentValue, newValue);
    return this;
  }

  printOperations() {
    for (const operationObj of this._operations) {
      operationObj.operation.print(operationObj.oldValue, operationObj.value);
    }
    console.log("-----------");
    console.log(`Total: ${this._currentValue}`);
  }
}

const calculator = new Calculator(0);

calculator
  .execute(new Add(), 10)
  .execute(new Add(), 20)
  .execute(new Subtract(), 15)
  .execute(new Multiply(), 3)
  .execute(new Divide(), 2)
  .printOperations();

export {};
