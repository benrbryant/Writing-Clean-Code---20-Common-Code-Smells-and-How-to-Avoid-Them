import { getCustomers } from "./utils";

const sendEmails = async () => {
  const customers = await getCustomers();

  for (const customer of customers) {
    if (Boolean(customer.email)) {
      let emailMessage = "Hello " + customer.name + ",\n";
      emailMessage += "Thank you for subscribing to our newsletter!\n";

      console.log(emailMessage);
    }
  }
};

const displayCustomers = async () => {
  const customers = await getCustomers();

  for (const customer of customers) {
    console.log("---\n");
    console.log(
      `Name: ${customer.name}\nEmail: ${customer.email || "None"}\nPhone: ${
        customer.phone || "None"
      }\n`
    );
  }
};

sendEmails();
displayCustomers();
