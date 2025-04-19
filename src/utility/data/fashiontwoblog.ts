interface Blog {
  name: string;
  image: string;
  date: string;
  title: string;
  month: string;
}

const fashiontwoblog: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    name: "Watches",
    date: "30",
    title: "Marketing Guide: 5 Steps to Success to way.",
    month: "Jun",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/10.jpg",
    date: "02",
    name: "Shoes",
    title: "Best way to solve business deal issue in market.",
    month: "Apr",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/11.jpg",
    date: "09",
    name: "Fashion",
    title: "31 grocery customer service stats know in 2019.",
    month: "Mar",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/12.jpg",
    date: "25",
    name: "Glasses",
    title: "Business ideas to grow your business traffic.",
    month: "Jan",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/13.jpg",
    date: "10",
    name: "Bags",
    title: "Marketing Guide: 5 Steps way to Success.",
    month: "Dec",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/14.jpg",
    date: "08",
    name: "Fashion",
    title: "15 customer service stats idea know in 2023.",
    month: "Aug",
  },
];
export default fashiontwoblog;
