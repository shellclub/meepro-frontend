import { Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import useSWR from "swr";
import { ProductContentType } from "../../types";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const FashionProductItem = ({
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
          md={4}
          sm={6}
          xs={12}
          className="gi-col-5 gi-product-box"
        >
          <ItemCard data={item} />
        </Col>
      ))}
    </>
  );
};

export default FashionProductItem;
