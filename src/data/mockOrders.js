const mockOrders = [
  {
    id: 1,
    vendorName: "Burger Joint",
    items: [
      { name: "Caesar Salad", quantity: 1, price: 9.99 },
      { name: "Margherita Pizza", quantity: 1, price: 12.99 }
    ],
    total: 22.98,
    status: "Delivered",
    date: "2024-07-10"
  },
  {
    id: 2,
    vendorName: "Healthy Pharmacy",
    items: [
      { name: "Pain Reliever", quantity: 2, price: 5.50 },
      { name: "Bandages", quantity: 1, price: 3.00 }
    ],
    total: 14.00,
    status: "Delivered",
    date: "2024-07-05"
  },
  {
    id: 3,
    vendorName: "Pizza Place",
    items: [
      { name: "Pepperoni Pizza", quantity: 1, price: 14.99 }
    ],
    total: 14.99,
    status: "Pending",
    date: "2024-07-14"
  }
];

export default mockOrders;


