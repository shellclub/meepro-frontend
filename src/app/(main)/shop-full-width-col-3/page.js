import Category from '@/components/category/Category'
import FullWidth from '@/components/full-width/FullWidth'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'


const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <Category />
      <FullWidth lg={12} xl={4} />

    </>
  )
}

export default page
