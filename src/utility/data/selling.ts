interface Selling {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const selling: Selling[] = [
    {
      id: 11212,
      name: "vegetables",
      title:"Lemon - Seedless",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/18_1.jpg",
      quantity: 1,
      newPrice: 42.00,
      oldPrice: 45.00,
      waight: "5 kg"
    },
    {
      id: 168,
        name: "Fruits",
        title:"Mango - Kesar",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
        quantity: 1,
        newPrice: 62.00,
        oldPrice: 65.00,
        waight : "1 kg"
      },
      {
        id: 161431,
        name: "Driedfruit",
        title:"Mixed Nuts & Almonds Dry Fruits",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/7_2.jpg",
        quantity: 1,
        newPrice: 10.00,
        oldPrice: 11.00,
        waight: "500 g"
      },
      {
        id: 16411,
        name: "Driedfruit",
        title:"Californian Almonds Value Pack",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
        quantity: 1,
        newPrice: 25.00,
        oldPrice: 30.00,
        waight: "250 g"
      },
      {
        id: 121293,
        name: "vegetables",
        title:"Onion - Hybrid",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/13_1.jpg",
        quantity: 1,
        newPrice: 20.00,
        oldPrice: 30.00,
        waight: "12 pcs"
      },
      {
        id: 16141,
        name: "Driedfruit",
        title:"Berry & Graps Mix Snack",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
        quantity: 1,
        newPrice: 52.00,
        oldPrice: 55.00,
        waight: "1 pcs"
      },
  ]
  export default selling;