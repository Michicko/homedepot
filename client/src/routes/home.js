import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { products } from "../utils/data";

const Home = () => {
  return (
    <>
      <Navbar bg="primary" border={false} />
      <Header />
      <Slider items={products} />
    </>
  );
};

export default Home;
