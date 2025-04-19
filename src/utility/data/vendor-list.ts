interface VendorList {
  id: number;
  name: string;
  description: string;
  image: string;
  level: number;
  levelOutOf: number;
  products: number;
  month_since: number;
  year_since: number;
}

const vendorlist: VendorList[] = [
  {
    id: 1,
    name: "Maruti Sales",
    description: "Retail Business",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/1.jpg",
    level: 9,
    levelOutOf: 10,
    products: 568,
    month_since: 2,
    year_since: 10,
  },
  {
    id: 2,
    name: "Maruti Sales",
    description: "Retail Business",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/2.jpg",
    level: 10,
    levelOutOf: 10,
    products: 444,
    month_since: 1,
    year_since: 11,
  },
  {
    id: 3,
    name: "Maruti Sales",
    description: "Retail Business",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/3.jpg",
    level: 8,
    levelOutOf: 10,
    products: 674,
    month_since: 1,
    year_since: 11,
  },
  {
    id: 4,
    name: "Maruti Sales",
    description: "Retail Business",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/4.jpg",
    level: 7,
    levelOutOf: 10,
    products: 356,
    month_since: 1,
    year_since: 10,
  },
  {
    id: 5,
    name: "Maruti Sales",
    description: "Retail Business",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/5.jpg",
    level: 7,
    levelOutOf: 10,
    products: 541,
    month_since: 3,
    year_since: 8,
  },
  {
    id: 6,
    name: "Maruti Sales",
    description: "Retail Business",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/6.jpg",
    level: 9,
    levelOutOf: 10,
    products: 235,
    month_since: 4,
    year_since: 11,
  },
];

export default vendorlist;
