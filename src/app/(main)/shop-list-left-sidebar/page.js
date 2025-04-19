import Category from '@/components/shop-sidebar/SidebarCategory'
import Shop from '@/components/shop-sidebar/Shop'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'


const page = () => {
    return (
        <>


            <Breadcrumb title={"Shop Page"} />
            <section className="gi-shop">
                <div className="container">
                    <Category />
                    <Shop
                        list={"list-view"}
                        order={"order-lg-last order-md-first"}
                        lg={9}
                        xl={12}
                        sm={12}
                        isList={true}
                    />
                </div>
            </section>


        </>
    )
}

export default page;
