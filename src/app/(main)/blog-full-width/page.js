import { Row } from 'react-bootstrap'
import BlogFullwidth from '@/components/blog-sidebar/BlogFullwidth'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Blog Page"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <BlogFullwidth
                            lg={4}
                            md={6}
                        />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
