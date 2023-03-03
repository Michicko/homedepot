import Hero from "@/components/Hero";

const Shop = () => {
  return (
    <>
      <Hero
        withBg={true}
        withHeading={true}
        heading="Product catalog"
        history={["Shop", "All products"]}
      />
    </>
  );
};

export default Shop;
