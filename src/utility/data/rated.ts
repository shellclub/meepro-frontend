interface Rated {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const rated: Rated[] = [
    {
      id: 58,
      name: "vegetables",
      title:"Ginger - Organic",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
      quantity: 1,
      newPrice: 62.00,
      oldPrice: 65.00,
      waight: "1 kg"
    },
    {
      id: 16511,
        name: "Driedfruit",
        title:"Dates Value Pouch Dates Value Pouch",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
        quantity: 1,
        newPrice: 56.00,
        oldPrice: 78.00,
        waight : "3 pcs"
      },
      {
        id: 1831,
        name: "Fruits",
        title:"Blue berry",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
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
        id: 1283,
        name: "vegetables",
        title:"Potato",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/12_1.jpg",
        quantity: 1,
        newPrice: 50.00,
        oldPrice: 55.00,
        waight: "2 pack"
      },
      {
        name: "Fruits",
        id: 168,
        title:"Mango - Kesar",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
        quantity: 1,
        newPrice: 52.00,
        oldPrice: 55.00,
        waight: "1 pcs"
      },
  ]
  export default rated;