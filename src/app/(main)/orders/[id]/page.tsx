import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ProductOrderDetails from "@/components/order-page/OrdersDetails";
import ProductOrderDetailsById from "@/components/order-page/OrdersDetailsById";
import { Row } from "react-bootstrap";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      {/* {params.id} */}
      <Breadcrumb title={"My Orders Details"} />
      <section className="gi-blog padding-tb-40">
        <div className="container">
          <Row>
            {/* <ProductOrderDetails id={id} /> */}
            <ProductOrderDetailsById id={id} />
          </Row>
        </div>
      </section>
    </>
  );
}
