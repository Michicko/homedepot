import Articles from "../components/Articles";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { products } from "../utils/data";
import articles from "../utils/articles";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Discount products={products} />
        <PopularCategories products={products} />
        <Articles articles={articles} />
        <NewsLetter />
      </main>
    </>
  );
};

export default Home;
