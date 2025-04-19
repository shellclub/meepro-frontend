interface Trending {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const trending: Trending[] = [
    {
      id: 1664511,
      name: "Driedfruit",
      title:"Healthy Nutmix, 200g Pack",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_1.jpg",
      quantity: 1,
      newPrice: 42.00,
      oldPrice: 45.00,
      waight: "5 kg"
    },
    {
      id: 12123,
        name: "Vegetables",
        title:"Organic fresh tomato",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/11_1.jpg",
        quantity: 1,
        newPrice: 25.00,
        oldPrice: 30.00,
        waight : "250 g"
      },
      {
        id: 1218723,
        name: "Coffee",
        title:"Coffee with chocolate cream mix pack",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/19_1.jpg",
        quantity: 1,
        newPrice: 62.00,
        oldPrice: 65.00,
        waight: "1 kg"
      },
      {
        id: 1841,
        name: "Fruits",
        title:"Fresh Lichi",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
        quantity: 1,
        newPrice: 10.00,
        oldPrice: 11.00,
        waight: "500 g"
      },
      {
        id: 16141,
        name: "Driedfruit",
        title:"Berry & Graps Mix Snack",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
        quantity: 1,
        newPrice: 52.00,
        oldPrice: 56.00,
        waight: "1 pcs"
      },
      {
        id: 169,
        name: "Pineapple",
        title:"Fruits",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/29_1.jpg",
        quantity: 1,
        newPrice: 20.00,
        oldPrice: 30.00,
        waight: "12 pcs"
      },
  ]
  export default trending;