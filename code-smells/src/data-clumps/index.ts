type DimensionsRaw = {
  width: number;
  height: number;
  depth: number;
  unit?: 'mm' | 'cm' | 'm';
}

class Dimensions {
  private _width: number;
  private _height: number;
  private _depth: number;
  private _unit: string;

  constructor({ width, height, depth, unit = 'cm' }: DimensionsRaw) {
    this._width = width;
    this._height = height;
    this._depth = depth;
    this._unit = unit;
  }

  getWidth() {
    return this._width;
  }

  getHeight() {
    return this._height;
  }

  getDepth() {
    return this._depth;
  }

  getUnit() {
    return this._unit;
  }
}

type ProductRaw = {
  id: string;
  description: string;
  dimensions: Dimensions;
}

class Product {
  private _id: string;
  private _description: string;
  private _dimensions: Dimensions;
  
  constructor({ id, description, dimensions }: ProductRaw) {
    this._id = id;
    this._description = description;
    this._dimensions = dimensions;
  }

  getIdentifier() {
    return this._id;
  }

  getDescription() {
    return this._description;
  }

  getDimensions() {
    return this._dimensions;
  }
}

const product = new Product({
  id: '1',
  description: 'mock product',
  dimensions: new Dimensions({
    width: 10,
    height: 10,
    depth: 10
  })
})

export {};
