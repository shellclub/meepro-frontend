interface Wishlist {
  title: string;
  newPrice: number;
  waight: any;
  image: string;
  date: string;
  status: string;
}

const wishlist: Wishlist[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_1.jpg",
    title: "Californian Almonds Value 250g + 50g Pack",
    date: "June 30,2022",
    status: "Available",
    newPrice: 65,
    waight: "",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_1.jpg",
    date: "April 02,2022",
    title: "Healthy Nutmix, 200g Pack",
    status: "Out Of Stock",
    newPrice: 68,
    waight: "",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/15_1.jpg",
    date: "Mar 09,2022",
    title: "Capsicum - Red",
    status: "Available",
    newPrice: 360,
    waight: "",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
    date: "January 25,2022",
    title: "Ginger - Organic",
    status: "Out Of Stock",
    newPrice: 584,
    waight: ""

  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/18_1.jpg",
    date: "December 10,2021",
    title: "Lemon - Seedless",
    status: "Out Of Stock",
    newPrice: 65,
    waight: ""

  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/20_1.jpg",
    date: "August 08,2021",
    title: "Organic fresh Broccoli",
    status: "Disabled",
    newPrice: 65,
    waight: ""

  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
    date: "August 08,2021",
    title: "Fresh Lichi",
    status: "Available",
    newPrice: 368,

    waight: ""
  
  }
];
export default wishlist;
