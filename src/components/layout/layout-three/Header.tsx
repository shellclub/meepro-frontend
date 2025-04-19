"use client";
import HeaderTop from "./header/HeaderTop";
import HeaderButtom from "./header/HeaderButtom";
import HeaderManu from "./header/HeaderManu";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import FeatureTools from "@/theme/ThemeSwitcher";

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  return (
    <>
      {/* <Loader /> */}
      <FeatureTools />
      <header className="gi-header">
        <HeaderTop />
        <HeaderButtom wishlistItems={wishlistItems} cartItems={cartItems} />
        <HeaderManu />
      </header>
    </>
  );
}

export default Header;
