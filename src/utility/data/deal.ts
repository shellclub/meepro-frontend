interface Deal {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  title: string;
  weight: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number;
}

const deal: Deal[] = [
  {
    title: "Mixed Nuts Berries Pack",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_2.jpg",
    category: "Dried Fruits",
    newPrice: 45.0,
    oldPrice: 56.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 51,
    quantity: 1,
    weight: "",
    rating: 4,
    status: "Available",
  },
  {
    title: "Multi Grain Combo Cookies",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
    category: "Cookies",
    weight: "10kg",
    newPrice: 25.0,
    oldPrice: 30.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 52,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Fresh Mango juice pack",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
    category: "Foods",
    newPrice: 46.0,
    oldPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 53,
    quantity: 1,
    weight: "",
    rating: 2,
    status: "Available",
  },
  {
    title: "Dates Value Fresh Pouch",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
    category: "Dried Fruits",
    newPrice: 78.0,
    oldPrice: 85.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 54,
    quantity: 1,
    weight: "",
    rating: 3,
    status: "Available",
  },
  {
    title: "Stick Fiber Masala Magic",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_2.jpg",
    category: "Foods",
    newPrice: 45.0,
    oldPrice: 50.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 55,
    quantity: 1,
    weight: "2pack",
    rating: 2,
    status: "Out Of Stock",
  },
  {
    title: "Natural Hub Cherry Karonda",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/24_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/24_1.jpg",
    category: "Fresh Fruit",
    newPrice: 49.0,
    oldPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 56,
    quantity: 1,
    weight: "1kg",
    rating: 2,
    status: "Available",
  },
  {
    title: "Fresh Mango juice pack",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
    category: "Foods",
    newPrice: 20.0,
    oldPrice: 21.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 53,
    quantity: 1,
    weight: "",
    rating: 2,
    status: "Available",
  },
  {
    title: "Fresh Organic Ginger Pack",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
    category: "Tuber root",
    newPrice: 2.0,
    oldPrice: 3.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 58,
    quantity: 1,
    weight: "100g",
    rating: 4,
    status: "Out Of Stock",
  },
];

export default deal;
