import React from "react";
import Bannerslider from '../Bannerslider/Bannerslider'
import Benifits from '../Benifits/Benifits';
import Categories from '../Categories/Categories';
import Bestdeals from '../Bestdeals/Bestdeals';
import Brands from '../Brands/Brands';
import Featuresproducts from '../Featuresproducts/Featuresproducts';
import Announcement from '../Announcement/Announcement';
import Toprated from '../Toprated/Toprated';

function Home() {
  return (
    <>
      <Bannerslider />
      <Benifits />
      <Categories />
      <Bestdeals />
      <Brands />
      <Featuresproducts />
      <Announcement />
      <Toprated />
    </>
  );
}

export default Home;
