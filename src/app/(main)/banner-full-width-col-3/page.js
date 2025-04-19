import FullWidth from '@/components/full-width/FullWidth'
import CategoryBanner from '@/components/banner/CategoryBanner'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <section className="gi-shop padding-tb-40">
        <div className="container">
          <CategoryBanner />
          <FullWidth
            lg={12}
            xl={4}
            className="" onlyRow={true}
          />
        </div>
      </section>

    </>
  )
}

export default page
