import React from "react";
import Bannerslider from '../Bannerslider/Bannerslider'
import Benifits from '../Benifits/Benifits';
import Categories from '../Categories/Categories';
import Bestdeals from '../Bestdeals/Bestdeals';

function Home() {
  return (
    <>
      <Bannerslider />
      <Benifits />
      <Categories />
      <Bestdeals />
    </>
  );
}

export default Home;
