import fs from "fs";
import path from "path";
import readline from "readline";

type Customer = {
  name?: string;
  phone?: string;
  email?: string;
}

const _readCustomersFromCsv = async (): Promise<{ headers: string[], data: string[]}> => {
  const fileReader = fs.createReadStream(path.resolve(__dirname + "/customerData.csv"));
  const lineReader = readline.createInterface({
    input: fileReader,
    crlfDelay: Infinity,
  });
  let lineCount = 0;
  let headers: string[] = [];
  const data: string[] = [];

  for await (const line of lineReader) {
    if (lineCount === 0) {
      headers = line.split(',');
    } else {
      data.push(line);
    }
    lineCount++;
  }

  return { headers, data };
};

export const getCustomers = async (): Promise<Customer[]> => {
  const { headers, data } = await _readCustomersFromCsv();

  const customers = [];

  for (const line of data) {
    const customerRaw: { [index: string]: string | undefined } = {};
    const customerData = line.split(",");

    for (let i = 0; i < headers.length; i++) {
      customerRaw[headers[i]] = Boolean(customerData[i]) ? customerData[i] : undefined;
    }

    customers.push(customerRaw);
  }

  return customers.map(({ name, phone, email}) => ({ name, phone, email }));
};
