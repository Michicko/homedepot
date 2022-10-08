import Articles from "../components/Articles";
import Discount from "../components/Discount";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { products } from "../utils/data";

const Home = () => {
  return (
    <>
      <Navbar bg="primary" border={false} />
      <Header />
      <main id="main">
        <Discount products={products} />
        <Articles />
        <NewsLetter />
      </main>
    </>
  );
};

export default Home;
