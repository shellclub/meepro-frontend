import BlogPage from '@/components/blog-sidebar/BlogPage'
import { Row } from 'react-bootstrap'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Blog Page"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <BlogPage
                            order={"order-lg-last order-md-first"}
                            lg={8}
                            md={6}
                        />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
