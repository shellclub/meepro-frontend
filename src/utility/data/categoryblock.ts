interface Service {
  name: string;
  icon: string;
  title: string;
  num: number;
}

const service: Service[] = [
  {
    icon: "fi-rr-shop",
    name: "Shirt | T-Shirts",
    title: "Clothes",
    num: 36,
  },
  {
    icon: "fi fi-ts-hand-holding-seeding",
    name: "24X7 Support",
    title: "Dresses",
    num: 65,
  },
  {
    icon: "fi fi-ts-badge-percent",
    name: "30 Days Return",
    title: "Simply return it within 30 days for an exchange",
    num: 65,
  },
  {
    icon: "fi fi-ts-donate",
    name: "Payment Secure",
    title: "Contact us 24 hours a day, 7 days a week",
    num: 65,
  },
];
export default service;
