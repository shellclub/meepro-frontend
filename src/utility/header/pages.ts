interface Page {
  name: string;
  href: string;
}

const pages: Page[] = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Checkout",
    href: "/checkout",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Compare",
    href: "/compare",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Login",
    href: "/login",
  },
];
export default pages;
