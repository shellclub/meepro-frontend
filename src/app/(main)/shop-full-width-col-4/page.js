import Category from '@/components/category/Category'
import FullWidth from '@/components/full-width/FullWidth'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'


const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <Category />
      <FullWidth xl={3} lg={12} />

    </>
  )
}

export default page
