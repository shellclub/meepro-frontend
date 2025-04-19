import Category from '@/components/shop-sidebar/SidebarCategory'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import FullWidth from '@/components/full-width/FullWidth'


const page = () => {
    return (
        <>


            <Breadcrumb title={"Shop Page"} />
            <Category />
            <FullWidth lg={12} xl={3} />



        </>
    )
}

export default page;
