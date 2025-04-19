interface Product {
  image: string;
}

const productimage: Product[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_1.jpg",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_1.jpg",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_1.jpg",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
  },
];
export default productimage;
