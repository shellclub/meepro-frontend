"use client";
import { Col } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ShopProductItem = ({
  data,
  xl,
  isGridView,
  classCol = "",
  isList = false,
}: any) => {
  const sizeProps = isList
    ? { xl: 12 }
    : { xl: xl, lg: 4, xs: 12, sm: 6, md: 6 };

  return (
    <Col
      {...sizeProps}
      className={`${
        isGridView ? `col-md-6 col-xs-6 col-sm-6 width-50` : ""
      } ${classCol} mb-6 ${!isList ? "gi-product-box" : ""} pro-gl-content`}
    >
      <ItemCard data={data} />
    </Col>
  );
};

export default ShopProductItem;
