import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import OrderCustomPage from '@/components/order-page/OrdersCustom'


const page = () => {
    return (
        <>


            <Breadcrumb title={"My Orders"} />
            <OrderCustomPage />

        </>
    )
}

export default page
