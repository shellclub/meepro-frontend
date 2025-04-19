import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import OrderPage from '@/components/order-page/Orders'



const page = () => {
    return (
        <>


            <Breadcrumb title={"My Orders"} />
            <OrderPage />

        </>
    )
}

export default page
