interface Fashion {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    quantity: number;
    id: number
  }

  const fashionrated: Fashion[] = [
    {
      id: 2,
      name: "jewellery",
      title:"Rose Gold Earring",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      quantity: 1,
      newPrice: 62.00,
      oldPrice: 65.00,
    },
    {
      id: 41,
        name: "Fashion",
        title:"Men's Wear printed shirt ",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_2.jpg",
        quantity: 1,
        newPrice: 56.00,
        oldPrice: 78.00,
      },
      {
        id: 105,
        name: "shoes",
        title:"Women's casual shoes",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
        quantity: 1,
        newPrice: 25.00,
        oldPrice: 30.00,
      },
      {
        name: "shampoo",
        title:"anti dandruff shampoo",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
        quantity: 1,
        id: 114,
        newPrice: 20.00,
        oldPrice: 30.00,
      },
      {
        id: 87,
        name: "Clothes",
        title:"men's Jacket Fashion Coat",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_1.jpg",
        quantity: 1,
        newPrice: 50.00,
        oldPrice: 55.00,
      },
      {
        id: 1,
        name: "wallet",
        title:"Women's wallet Hand Purse",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
        quantity: 1,
        newPrice: 52.00,
        oldPrice: 55.00,
      }
  ]
  export default fashionrated;