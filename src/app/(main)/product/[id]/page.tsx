import ProductDetailPage from "@/components/product-page/ProductDetailPage";
import RelatedProduct from "@/components/product-page/related-product/RelatedProduct";
import { Suspense } from "react";
import { Breadcrumb, Row } from "react-bootstrap";

function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Breadcrumb title={"Product Page"} />
      <section className="gi-single-product padding-tb-40">
        <div className="container">
          <Row>
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetailPage
                id={params.id}
                order={"order-lg-last order-md-first"}
                none={""}
                lg={9}
              />
            </Suspense>
          </Row>
        </div>
      </section>
      <RelatedProduct />
    </>
  );
}

export default Page;
