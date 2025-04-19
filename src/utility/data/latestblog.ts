interface Blog {
    name: string;
    image: string;
    date: string
    title: string;
  }
  
  const latestblog: Blog[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
      name: "Organic",
      date: "June 30,2022",
      title: "Marketing Guide: 5 Steps to Success to way.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
      date: "April 02,2022",
      name: "Fruits",
      title: "Best way to solve business deal issue in market.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
      date: "Mar 09,2022",
      name: "Vegetables",
      title: "31 grocery customer service stats know in 2019.",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
      date: "January 25,2022",
      name: "Fastfood",
      title: "Business ideas to grow your business traffic.",
    },
    {
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
        date: "December 10,2021",
        name: "Fruits",
        title: "Marketing Guide: 5 Steps way to Success.",
      },
      {
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
        date: "August 08,2021",
        name: "Vegetables",
        title: "15 customer service stats idea know in 2023.",
      },
  ];
  export default latestblog;