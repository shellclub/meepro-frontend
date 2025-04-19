import Shop from '@/components/shop-sidebar/Shop'
import Category from '@/components/category/Category'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'




const page = () => {
    return (
        <>


            <Breadcrumb title={"Shop Page"} />
            <section className="gi-shop">
                <div className="container">
                    <Category />
                    <Shop
                        lg={9}
                        xl={3} />
                </div>
            </section>

        </>
    )
}

export default page
