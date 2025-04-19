import useSwr from "swr";
import { useState } from "react";
import { Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { ProductContentType } from "../../types";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

function ProductAll({
  url,
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}: ProductContentType) {
  const { data, error } = useSwr(url, fetcher, {
    onSuccess,
    onError,
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  });

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

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
      {getData().map((item: any, index: number) => (
        <Col
          key={index}
          md={4}
          className={`col-sm-6 gi-product-box gi-col-5 ${
            selected ? "active" : ""
          }`}
          onClick={handleClick}
        >
          <ItemCard data={item} />
        </Col>
      ))}
    </>
  );
}

export default ProductAll;
