import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import UserInvoice from '@/components/invoice/UserInvoice'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Invoice"} />
            <UserInvoice />

        </>
    )
}

export default page
