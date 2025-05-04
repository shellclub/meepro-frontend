import CategoryBanner from "@/components/banner/CategoryBanner";
import Shop from "@/components/shop-sidebar/Shop";
import ShopCustom from "@/components/shop-sidebar/ShopCustom";
import React from "react";
import { Breadcrumb } from "react-bootstrap";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Breadcrumb title={"Shop Page"} />
      <section className="gi-shop padding-tb-40">
        <div className="container">
          {/* <CategoryBanner /> */}

          <ShopCustom
            order={"order-lg-last order-md-first"}
            lg={9}
            xl={3}
            className=""
          />
        </div>
      </section>
    </>
  );
}

export default page;
