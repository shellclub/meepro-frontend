import Shop from '@/components/shop-sidebar/Shop'
import CategoryBanner from '@/components/banner/CategoryBanner'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'


const page = () => {
    return (
        <>


            <Breadcrumb title={"Shop Page"} />
            <section className="gi-shop padding-tb-40">
                <div className="container">
                    <CategoryBanner />
                    <Shop
                        list={"list-view"}
                        lg={9}
                        xl={12} className=''
                        isList={true} />
                </div>
            </section>

        </>
    )
}

export default page
