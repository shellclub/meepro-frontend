"use client";

import Banner from "@/components/banner/Banner";
import OfferBanners from "@/components/banner/OfferBanners";
import LatestBlog from "@/components/blog/LatestBlog";
import Category from "@/components/category/Category";
import Deal from "@/components/deal/Deal";
import HeroSlider from "@/components/hero/HeroSlider";
import Services from "@/components/service/Services";
import Trending from "@/components/trending/Trending";
import GroceryArrials from "@/components/arrivals/GroceryArrials";

const page = () => {
    return (
        <>
           
            <HeroSlider />
            <Category />
            <Deal />
            <GroceryArrials />
            <OfferBanners />
            <Services />
            <Trending />
            <LatestBlog />
        </>
    )
}

export default page
