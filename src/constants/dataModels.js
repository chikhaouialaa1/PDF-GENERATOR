export const invoice = {
  shipping: {
    name: "Alaa",
    address: "my adress,test,paris",
    city: "Paris",
    state: "good",
    country: "FR",
    postal_code: 93000,
  },
  items: [
    {
      item: "item1",
      description: "text description 1",
      quantity: 1,
      amount: 6000,
    },
    {
      item: "item2",
      description: "text description 2",
      quantity: 2,
      amount: 6000,
    },
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234,
};
