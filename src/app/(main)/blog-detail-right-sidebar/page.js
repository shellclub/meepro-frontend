import { Row } from 'react-bootstrap'
import BlogDetail from "@/components/blog-detail/BlogDetail"
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Blog Page"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <BlogDetail />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
