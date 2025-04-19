import { Row } from 'react-bootstrap'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import ProductAccordingPage from '@/components/product-page/ProductAccordingPage'
import RelatedProduct from '@/components/product-page/related-product/RelatedProduct'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Product Page"} />
            <section className="gi-single-product padding-tb-40">
                <div className="container">
                    <Row>
                        <ProductAccordingPage
                            none={""}
                            lg={9}
                        />
                    </Row>
                </div>
            </section>
            <RelatedProduct />

        </>
    )
}

export default page
