// Example of coupling to internal data structures

type CustomerRaw = {
  id: string;
  name: string;
  shipmentAddress: string;
};

class Customer {
  private _id: string;
  private _name: string;
  private _shipmentAddress: string;

  constructor(customerRaw: CustomerRaw) {
    this._id = customerRaw.id;
    this._name = customerRaw.name;
    this._shipmentAddress = customerRaw.shipmentAddress;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getShipmentAddress() {
    return this._shipmentAddress;
  }

  setShipmentAddress(newShipmentAddress: string) {
    this._shipmentAddress = newShipmentAddress;
  }
}

type Product = {
  id: string;
  name: string;
  price: number;
};

const printShipmentLabel = (address: string, customerFullName: string) => {
  return `Delivery address:\n\n${customerFullName}\n${address}`;
};

const shipProductToCustomer = (product: Product, customer: Customer) => {
  const shipmentLabel = printShipmentLabel(customer.getShipmentAddress(), customer.getName());

  console.log(`Initiated shipment to ${shipmentLabel}`);
};

const updateCustomerShippingAddress = (customer: Customer, newAddress: string) => {
  if (!Boolean(newAddress)) {
    throw new Error("Invalid address, must be a non-empty string.");
  }

  customer.setShipmentAddress(newAddress);
};

// Example of coupling to data format (harder to catch, specially if automated test suit is weak)

type DiscountRaw = {
  id: string;
  productId: string;
  discountPct: number;
};

class Discount {
  private _id: string;
  private _productId: string;
  private _discountPct: number;

  constructor(discountRaw: DiscountRaw) {
    this._id = discountRaw.id;
    this._productId = discountRaw.productId;
    this._discountPct = discountRaw.discountPct;
  }

  isProductDiscounted(productId: string) {
    return this._productId === productId;
  }

  applyToProduct(product: Product) {
    return this._discountPct * product.price;
  }
}

const getProductDiscount = (discounts: Discount[], product: Product) =>
  discounts.find((disc) => disc.isProductDiscounted(product.id));

const calculateSum = (prev: number, curr: number) => prev + curr;

const fromProductToDiscount = (discountTable: Discount[]) => (product: Product) =>
  getProductDiscount(discountTable, product)?.applyToProduct(product) || 0;

const calculateTotalDiscount = (products: Product[], discounts: Discount[]) =>
  products.map(fromProductToDiscount(discounts)).reduce(calculateSum, 0);

const products: Product[] = [
  {
    id: "a",
    name: "Wonderful perfume",
    price: 10,
  },
  {
    id: "b",
    name: "Washing liquid",
    price: 3,
  },
  {
    id: "d",
    name: "Vacuum cleaner",
    price: 50,
  },
];

const discounts: DiscountRaw[] = [
  {
    id: "dA",
    productId: "a",
    discountPct: 0.4,
  },
  {
    id: "dB",
    productId: "b",
    discountPct: 0.1,
  },
  {
    id: "dC",
    productId: "c",
    discountPct: 0.55,
  },
];

console.log(calculateTotalDiscount(products, discounts.map((discount) => new Discount(discount))));

export {};
