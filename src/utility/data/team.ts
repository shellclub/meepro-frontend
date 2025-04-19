interface Team {
  name: string;
  image: string;
  title: string;
}

const team: Team[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/1.jpg",
    name: "Olivia Smith",
    title: "Founder",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/2.jpg",
    name: "William Dalin",
    title: "Co-Founder",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/3.jpg",
    name: "Emma Welson",
    title: "Manager",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/4.jpg",
    name: "Benjamin Martin",
    title: "Leader",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/5.jpg",
    name: "Amelia Martin",
    title: "Leader",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/3.jpg",
    name: "Emma Welson",
    title: "Manager",
  },
];
export default team;
