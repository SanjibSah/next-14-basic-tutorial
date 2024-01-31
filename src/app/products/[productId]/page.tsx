import { Metadata } from "next";
type Props = {
  params: { productId: string };
};

// We can also use async and await in generateMetadata.
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params?.productId}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  //   console.log(params, "parameters");
  return <h1>Product Detail of {params?.productId}</h1>;
};

export default ProductDetail;
