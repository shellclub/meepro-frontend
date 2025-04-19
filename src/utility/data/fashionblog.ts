interface Blog {
  name: string;
  image: string;
  date: string;
  title: string;
}

const fashionblog: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    name: "Watches",
    date: "June 30,2022",
    title: "Marketing Guide: 5 Steps to Success to way.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/10.jpg",
    date: "April 02,2022",
    name: "Shoes",
    title: "Best way to solve business deal issue in market.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/11.jpg",
    date: "Mar 09,2022",
    name: "Fashion",
    title: "31 fashion customer service stats know in 2019.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/12.jpg",
    date: "January 25,2022",
    name: "Glasses",
    title: "Business ideas to grow your business traffic.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/13.jpg",
    date: "December 10,2021",
    name: "Bags",
    title: "Marketing Guide: 5 Steps way to Success.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/14.jpg",
    date: "August 08,2021",
    name: "Fashion",
    title: "15 customer service stats idea know in 2023.",
  },
];
export default fashionblog;
