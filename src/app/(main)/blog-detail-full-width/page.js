import { Row } from 'react-bootstrap'
import BlogDetailFullwidth from '@/components/blog-detail/BlogDetailFullwidth'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Blog Page"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <BlogDetailFullwidth
                            lg={12}
                        />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
