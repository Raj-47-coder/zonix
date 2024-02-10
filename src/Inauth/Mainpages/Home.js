import React from "react";
import Bannerslider from '../Bannerslider/Bannerslider'
import Benifits from '../Benifits/Benifits';
import Categories from '../Categories/Categories';
import Bestdeals from '../Bestdeals/Bestdeals';
import Brands from '../Brands/Brands';
import Featuresproducts from '../Featuresproducts/Featuresproducts';
import Announcement from '../Announcement/Announcement';
import Toprated from '../Toprated/Toprated';
import Topcategory from "../Topcategory/Topcategory";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Bannerslider />
      <Topcategory />
      <Categories />
      <Bestdeals />
      <Brands />
      <Featuresproducts />
      <Announcement />
      <Toprated />
      <Benifits />
    </>
  );
}

export default Home;
