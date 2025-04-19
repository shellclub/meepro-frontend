import React from "react";
import FashionTwoArrials from "../arrivals/FashionTwoArrials";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const SummerBanner = () => {
  return (
    <>
      <Fade
        triggerOnce
        direction="up"
        duration={2000}
        delay={200}>
        <div className="container">
          <div className="gi-banner ">
            <div className="row padding-tb-40">
              <div className="col-md-12">
                <Fade triggerOnce direction="up" duration={2000} delay={200}>
                  <div className="gi-animated-banner banner-3">
                    <h2 className="d-none">Offers</h2>
                    <div className="gi-bnr-detail">
                      <div className="gi-bnr-info">
                        <h3>30% off sale</h3>
                        <h2>
                          Latest Exclusive <br></br>Summer Collection
                        </h2>
                        <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="gi-product-tab gi-products padding-tb-40 wow fadeInUp gi-products-3">
            <FashionTwoArrials />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SummerBanner;
