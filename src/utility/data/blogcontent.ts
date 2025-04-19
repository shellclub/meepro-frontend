interface Blog {
  category: string;
  image: string;
  date: string;
  title: string;
  description: string;
}

const blogcontent: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
    category: "Organic",
    date: "June 30,2022",
    title: "Marketing Guide: 5 Steps to Success to way.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
    date: "April 02,2022",
    category: "Fruits",
    title: "Best way to solve business deal issue in market.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
    date: "Mar 09,2022",
    category: "Vegetables",
    title: "31 grocery customer service stats know in 2019.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
    date: "January 25,2022",
    category: "Fastfood",
    title: "Business ideas to grow your business traffic.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
    date: "December 10,2021",
    category: "Fruits",
    title: "Marketing Guide: 5 Steps way to Success.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
    date: "August 08,2021",
    category: "Vegetables",
    title: "15 customer service stats idea know in 2023.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
    category: "Organic",
    date: "June 30,2022",
    title: "Marketing Guide: 5 Steps to Success to way.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
    date: "April 02,2022",
    category: "Fruits",
    title: "Best way to solve business deal issue in market.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
    date: "January 25,2022",
    category: "Fastfood",
    title: "Business ideas to grow your business traffic.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default blogcontent;
