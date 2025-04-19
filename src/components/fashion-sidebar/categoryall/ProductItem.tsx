import React from "react";
import { Col } from "react-bootstrap";
import ItemCard from "../../product-item/ItemCard";
import useSWR from "swr";
import { ProductContentType } from "../../../types";
import fetcher from "../../fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";

const ProductItem = ({
  url,
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}: ProductContentType) => {
  const { data, error } = useSWR(url, fetcher, { onSuccess, onError });

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

  return (
    <>
      {getData()?.map((item: any, index: number) => (
        <Col
          key={index}
          xl={3}
          lg={4}
          sm={6}
          xs={12}
          className="gi-product-box"
        >
            <ItemCard data={item} />
        </Col>
      ))}
    </>
  );
};

export default ProductItem;
