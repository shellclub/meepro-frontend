interface Item {
    title: string;
    newPrice: number;
    waight: string;
    image: string;
    id: number
  }

  const cart: Item[] = [
    {
      title:"Ginger - Organic",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
      id: 58,
      newPrice: 65.00,
      waight: "1kg",

    },
    {
        title:"Dates Value Pouch Dates Value Pouch",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
        id: 56.00,
        newPrice: 78.00,
        waight : "3pcs"
      },
      {
        title:"Blue berry",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
        id: 1831,
        newPrice: 30.00,
        waight: "250g"
      },
      
  ]
  export default cart;