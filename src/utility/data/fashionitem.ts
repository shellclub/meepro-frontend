interface Fashion {
  name: string;
  image: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  quantity: number;
  id: number;
}

const fashionitem: Fashion[] = [
  {
    id: 71,
    name: "Fashion",
    title: "Men's stylish printed shirt",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    quantity: 1,
    newPrice: 42.00,
    oldPrice: 45.00,
  },
  {
    id: 86,
    name: "Baby Wear",
    title: "Cotton Clothes Sets for Boys",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    newPrice: 25.00,
    oldPrice: 30.00,
  },
  {
    id: 62,
    name: "Belt",
    title: "Men's Leather Belt",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    quantity: 1,
    newPrice: 62.00,
    oldPrice: 65.00,
  },
  {
    id: 63,
    name: "perfume",
    title: "Long lasting perfume",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    quantity: 1,
    newPrice: 10.00,
    oldPrice: 11.00,
  },
  {
    id: 73,
    name: "Lipstick",
    title: "Liquid Matte Lipstick",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    newPrice: 52.00,
    oldPrice: 55.00,
  },
  {
    id: 101,
    name: "shoes",
    title: "Men's sport shoes blue",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    quantity: 1,
    newPrice: 20.00,
    oldPrice: 30.00,
  },
]
export default fashionitem;