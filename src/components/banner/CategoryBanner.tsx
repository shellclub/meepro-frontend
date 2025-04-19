import Link from "next/link";
import React from "react";

const CategoryBanner = () => {
  return (
    <>
      <div className="padding-b-40 m-b-40">
        <div className="row">
          <div className="col-md-6">
            <div className="gi-ofr-banners">
              <div className="gi-bnr-body">
                <div className="gi-bnr-img">
                  <span className="lbl">70% Off</span>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_URL + "/assets/img/banner/5.jpg"
                    }
                    alt="banner"
                  />
                </div>
                <div className="gi-bnr-detail">
                  <h5>Fresh Fruits & veggies</h5>
                  <p>The flavor of something special.</p>
                  <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gi-ofr-banners m-t-767">
              <div className="gi-bnr-body">
                <div className="gi-bnr-img">
                  <span className="lbl">50% Off</span>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_URL + "/assets/img/banner/6.jpg"
                    }
                    alt="banner"
                  />
                </div>
                <div className="gi-bnr-detail">
                  <h5>Tasty Snack & Fastfood</h5>
                  <p>A healthy meal for every one.</p>
                  <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
