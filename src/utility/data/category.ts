interface Category {
  name: string;
  persantine: string;
  icon: string;
  image: string;
  item: number;
  num: number;
}

const category: Category[] = [
  {
    persantine: "30%",
    icon: "fi fi-tr-sleeping-cat",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "อาหารแมว",
    item: 320,
    num: 1,
  },
  {
    persantine: "",
    icon: "fi fi-tr-cat",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "อาหารสุนัข",
    item: 65,
    num: 2,
  },
  {
    persantine: "15%",
    icon: "fi-tr-cat-dog",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Hygienic Products",
    item: 548,
    num: 3,
  },
  {
    persantine: "10%",
    icon: "fi fi-tr-pan-food",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Cat dry Food",
    item: 48,
    num: 4,
  },
  {
    persantine: "",
    icon: "fi fi-tr-dog-bowl-empty",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Dog dry Food",
    item: 59,
    num: 5,
  },
  {
    persantine: "",
    icon: "fi fi-tr-canned-food",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Life Mate",
    item: 845,
    num: 6,
  },
  {
    persantine: "",
    icon: "fi fi-tr-shrimp",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Seafood",
    item: 652,
    num: 1,
  },
  {
    persantine: "20%",
    icon: "fi fi-tr-popcorn",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Fast Food",
    item: 320,
    num: 2,
  },
  {
    persantine: "",
    icon: "fi fi-tr-egg",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Eggs",
    item: 154,
    num: 3,
  },
];
export default category;
