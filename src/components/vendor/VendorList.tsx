"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import useSWR from "swr";

const VendorList = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const { data, error } = useSWR("/api/vendorlist", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  if (!login) {
    return (
      <div className="container">
        <p>
          Please <a href="/login">login</a> or <a href="/register">register</a>{" "}
          to view this page.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="padding-tb-40">
        {getData().map((item: any, index: number) => (
          <section
            className="section gi-catalog-multi-vendor m-b-30"
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="gi-multi-vendor-detail">
                  <div className="gi-page-description-info">
                    <div className="gi-catalog-vendor">
                      <img src={item.image} alt="vendor img" />
                    </div>
                    <div className="gi-catalog-vendor-info">
                      <div className="row vendor-card-height">
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <a href="/catalog-single-vendor">
                              <h6 className="name">{item.name}</h6>
                            </a>
                            <p>( {item.description} )</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>Level</h6>
                            <p>
                              ( Level : {item.level} out of {item.levelOutOf} )
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>Seller Products</h6>
                            <p>{item.products} Products</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>Seller since</h6>
                            <p>2year and 10months</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default VendorList;
