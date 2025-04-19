"use client";
import Shop from '@/components/shop-sidebar/Shop';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Category from '@/components/category/Category';

const page = () => {

  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <section className="gi-shop">
        <div className="container">
          <Category />
          <Shop
            order={"order-lg-last order-md-first"}
            lg={9}
            xl={4}
          />
        </div>
      </section>

    </>
  )
}

export default page;
