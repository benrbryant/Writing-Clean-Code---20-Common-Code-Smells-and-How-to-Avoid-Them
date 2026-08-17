type Customer = {
  name: string;
  email?: string;
};

const loadCustomers = (): Customer[] => {
  return [
    {
      name: "John",
      email: "john@example.com",
    },
    {
      name: "Alice",
      email: "alice@example.com",
    },
    {
      name: "Jane",
    },
    {
      name: "Arthur",
      email: "arthur@example.com",
    },
  ];
};

const sanitizeCustomer = (customer: Customer): Customer => {
  return {
    name: customer.name,
    email: customer.email ?? 'None'
  }
}

const sanitizeCustomers = (customers: Customer[]) => {
  return customers.map(sanitizeCustomer)
};

const sendEmails = (customers: Customer[]) => {
  customers
    .filter((customer) => Boolean(customer.email))
    .forEach((customer) => console.log(`E-mail sent to ${customer.name} : ${customer.email}`));
};

const customers = sanitizeCustomers(loadCustomers());

sendEmails(customers);

export {};
