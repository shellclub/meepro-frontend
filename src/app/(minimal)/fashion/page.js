"use client";

import FashionHeroSlider from "@/components/hero/FashionSlider";
import Category from "@/components/fashion-sidebar/Category";
import Services from "@/components/service/Services";
import FashionBlog from "@/components/blog/FashionBlog";
import NewsletterModalOne from "@/components/model/NewsletterModalOne";

function page() {
  return (
    <>
      <NewsletterModalOne />
      <FashionHeroSlider />
      <Category />
      <Services />
      <FashionBlog />
    </>
  );
}

export default page;
