interface Accessorise {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  title: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number;
}

const accessorise: Accessorise[] = [
  {
    title: "Women's wallet Hand Purse",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    category: "wallet",
    newPrice: 50.0,
    oldPrice: 70.0,
    location: "in Store, Online",
    brand: "Bhisma Organice",
    sku: 55555,
    id: 1,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Men's Leather Belt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    category: "Belt",
    newPrice: 15.0,
    oldPrice: 17.0,
    rating: 2,
    location: "in Store, Online",
    brand: "Darsh Mart",
    sku: 55555,
    id: 62,
    quantity: 1,
    status: "Available",
  },
  {
    title: "Long lasting perfume",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    category: "perfume",
    newPrice: 25.0,
    oldPrice: 30.0,
    rating: 4,
    location: "in Store, Online",
    brand: "Bhisma Organice",
    sku: 55555,
    id: 63,
    quantity: 1,
    status: "Out Off Stock",
  },
  {
    title: "anti dandruff shampoo",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    category: "shampoo",
    newPrice: 5.0,
    oldPrice: 7.0,
    rating: 4,
    location: "Online",
    brand: "Darsh Mart",
    sku: 55555,
    id: 114,
    quantity: 1,
    status: "Available",
  },
  {
    title: "Body Lotion for Dry Skin",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    category: "Body Lotion",
    newPrice: 2.0,
    oldPrice: 3.0,
    rating: 3,
    location: "in Store",
    brand: "Darsh Mart",
    sku: 55555,
    id: 115,
    quantity: 1,
    status: "Out Off Stock",
  },
  {
    title: "Rose Gold Earring",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    category: "jewellery",
    newPrice: 60.0,
    oldPrice: 80.0,
    rating: 2,
    location: "in Store, Online",
    brand: "Bhisma Organice",
    sku: 55555,
    id: 2,
    quantity: 1,
    status: "Disabled",
  },
  {
    title: "Liquid Matte Lipstick",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    category: "Lipstick",
    newPrice: 20.0,
    oldPrice: 30.0,
    rating: 5,
    location: "in Store, Online",
    brand: "Darsh Mart",
    sku: 55555,
    id: 73,
    quantity: 1,
    status: "Available",
  },
  {
    title: "Compact makeup kit",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
    category: "makeup kit",
    newPrice: 78.0,
    oldPrice: 85.0,
    rating: 2,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 55555,
    id: 68,
    quantity: 1,
    status: "Out Off Stock",
  },
];

export default accessorise;
