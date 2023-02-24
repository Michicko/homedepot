import Link from "next/link";

const Product = ({ product }) => {
  const { slug, name, price, image, discount } = product;
  return <Link href={`/shop/${slug}`}></Link>;
};

export default Product;
