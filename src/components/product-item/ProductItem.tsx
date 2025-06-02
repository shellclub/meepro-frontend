import useSwr from "swr";
import { useState } from "react";
import { Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { ProductContentType } from "../../types";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import useGetProduct from "@/hooks/product/useGetProduct";
import { IProduct, IProductSearch } from "@/types/product/productType";
import ProductItemCard from "./ProductItemCard";
import { useSession } from "next-auth/react";

function ProductAll(search: IProductSearch) {
  // const { data, error } = useSwr(url, fetcher, {
  //   onSuccess,
  //   onError,
  //   revalidateOnFocus: false,
  //   dedupingInterval: 10000,
  // });

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  // if (error) return <div>Failed to load products</div>;
  // if (!data)
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   );

  // const getData = () => {
  //   if (hasPaginate) return data.data;
  //   else return data;
  // };

  const session = useSession();
  const {
    data,
    isLoading: loading,
    refetch,
  } = useGetProduct(search, session.data?.user.customer_type.code);
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <>
      {data?.map((item: any, index: number) => (
        <Col
          key={index}
          md={4}
          className={`col-sm-6 gi-product-box gi-col-5 ${
            selected ? "active" : ""
          }`}
          onClick={handleClick}
        >
          <ProductItemCard data={item} />
        </Col>
      ))}
    </>
  );
}

export default ProductAll;
