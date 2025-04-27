"use client";
import HeaderManu from "./header/HeaderManu";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import FeatureTools from "@/theme/ThemeSwitcher";

function Header() {
  const cartItems = useSelector((state: RootState) => state.cartCustom.items);
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  return (
    <>
      {/* <Loader /> */}

      <header className="gi-header">
        <FeatureTools />
        <HeaderOne wishlistItems={wishlistItems} cartItems={cartItems} />
        <HeaderTwo cartItems={cartItems} wishlistItems={wishlistItems} />
        <HeaderManu />
      </header>
    </>
  );
}

export default Header;
