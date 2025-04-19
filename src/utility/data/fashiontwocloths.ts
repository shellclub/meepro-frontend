interface Clothe {
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
  color1 : any;
  color2 : any;
  color3 : any;
  size1: string;
  size2: string;
  id: number
}

const fashiontwoclothes: Clothe[] = [
  {
    title: "men's wear printed shirt",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "men's wear",
    newPrice: 59.0,
    oldPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 41,
    quantity: 1,
    rating: 2,
    status: "Available",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "Princess Look fashion Dress",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "women's wear",
    newPrice: 58.0,
    oldPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 132,
    quantity: 1,
    rating: 3,
    status: "Available",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "Men's stylish printed shirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    category: "men's wear",
    newPrice: 59.0,
    oldPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 71,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"

  },
  {
    title: "Stylish printed women's dress",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "women's wear",
    newPrice: 78.0,
    oldPrice: 85.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 134,
    quantity: 1,
    rating: 3,
    status: "Available",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "Men's wear printed shirt",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_2.jpg",
    category: "men's wear",
    newPrice: 25.0,
    oldPrice: 35.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 41,
    quantity: 1,
    rating: 5,
    status: "Available",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "Cotton Clothes Sets for Boys",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_2.jpg",
    category: "baby wear",
    newPrice: 45.0,
    oldPrice: 56.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 86,
    quantity: 1,
    rating: 4,
    status: "Available",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "Men's Jacket Fashion Coat",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_2.jpg",
    category: "winter wear",
    newPrice: 49.0,
    oldPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 87,
    quantity: 1,
    rating: 2,
    status: "Out Of Stock",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "Printed Round Neck Tshirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
    category: "Unisex",
    newPrice: 32.0,
    oldPrice: 45.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 75,
    quantity: 1,
    rating: 4,
    status: "Available",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "men's wear printed shirt",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "men's wear",
    newPrice: 59.0,
    oldPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 41,
    quantity: 1,
    rating: 2,
    status: "Available",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "Princess Look fashion Dress",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "women's wear",
    newPrice: 58.0,
    oldPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 132,
    quantity: 1,
    rating: 3,
    status: "Out Of Stock",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
];

export default fashiontwoclothes;
