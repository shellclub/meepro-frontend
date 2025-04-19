import Link from "next/link";

const ShopCategoryBlock = ({ data }: any) => {
  const renderIcon = (category: string) => {
    switch (category) {
      case "Dried Fruit":
        return "fi fi-rs-grape";
      case "Fresh Fruit":
        return "fi fi-rs-apple-whole";
      case "Snacks":
        return "fi fi-rs-popcorn";
      case "Cookies":
        return "fi fi-rs-cookie";
      case "Foods":
        return "fi fi-rs-hamburger";
      case "Tuber root":
        return "fi fi-rs-corn";
      case "Vegetables":
        return "fi fi-rs-tomato";
      case "Clothes":
        return "fi-rr-shop";
      case "jewellery":
        return "fi fi-rs-gem";
      case "unisex":
        return "fi fi-rs-portrait";
      default:
        return null;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="gi-sidebar-block-item">
        <input type="checkbox" />
        <Link onClick={handleSubmit} href="/">
          <span>
            <i className={`${renderIcon(data.category)}`}></i>
            {data.category}
          </span>
        </Link>
        <span className="checked"></span>
      </div>
    </>
  );
};

export default ShopCategoryBlock;
