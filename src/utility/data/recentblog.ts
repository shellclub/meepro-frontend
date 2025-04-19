interface Blog {
    category: string;
    image: string;
    date: string;
    title: string;
    description: string
  }
  
  const recentblog: Blog[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
      category: "- Organic",
      date: "June 30,2021-2022",
      title: "The best fashion influencers.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
      date: "April 02,2021-2022",
      category: "- Fruits",
      title: "Vogue Shopping Weekend.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
      date: "Mar 09,2021-2022",
      category: "- Vegetables",
      title: "Fashion Market Reveals Her Jacket.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
      date: "January 25,2021-2022",
      category: "- Fastfood",
      title: "Summer Trending Fashion Market.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
      date: "December 10,2021-2022",
      category: "- Vegetables",
      title: "Winter 2021 Trending Fashion Market.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    
  ];
  export default recentblog;
  