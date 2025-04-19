"use client";
import FashionFilter from '@/components/fashion-filter/FashionFilter';
import CategorySlider from '@/components/fashion-filter/category-slider/FashionCategorySlider';

const page = () => {

  return (
    <>
      <section className="gi-shop padding-tb-40">
        <div className="container">
          <CategorySlider />
          <FashionFilter />
        </div>
      </section>
    </>
  )
}

export default page;
