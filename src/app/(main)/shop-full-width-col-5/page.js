import FullWidth from "@/components/full-width/FullWidth";
import Category from "@/components/category/Category";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <Category />
      <FullWidth classCol={"gi-col-5"} lg={12} itemsPerPage={15} />

    </>
  );
};

export default page;
