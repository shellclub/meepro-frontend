interface Category {
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

const categoryall: Category[] = [
  {
    title: "Men's stylish printed shirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
    category: "men's wear",
    newPrice: 59.0,
    oldPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 71,
    quantity: 1,

    rating: 4,
    status: "Disabled",
  },
  {
    title: "Rose Gold Earring",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    category: "jewellery",
    rating: 1,
    newPrice: 60.0,
    oldPrice: 80.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 2,
    quantity: 1,
    status: "Out Of Stock",
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
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 73,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Stylish printed women's dress",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "women's wear",
    newPrice: 78.0,
    oldPrice: 85.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 134,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Printed Round Neck Tshirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
    category: "Unisex",
    newPrice: 32.0,
    oldPrice: 45.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 75,
    quantity: 1,
    status: "Available",
    rating: 5,
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
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 63,
    quantity: 1,
    rating: 2,
    status: "Out Of Stock",
  },
  {
    title: "Women's sport shoes",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "Sports",
    newPrice: 500.0,
    oldPrice: 600.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 106,
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
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 62,
    quantity: 1,
    rating: 2,
    status: "Out Of Stock",
  },
];

export default categoryall;
