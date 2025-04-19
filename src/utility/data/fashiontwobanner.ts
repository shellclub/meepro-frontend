interface Service {
    name: string;
    image: string;
    num : number
  }
  
  const fashiontwobanner: Service[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/banner/12.jpg",
      name: "Women's Collection",
      num: 50
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/banner/13.jpg",
      name: "Kid's Collection",
      num : 60
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/banner/14.jpg",
      name: "Men's Collection",
      num : 70
    },
  ];
  export default fashiontwobanner