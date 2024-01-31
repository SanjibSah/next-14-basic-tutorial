"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handelClick = () => {
    console.log("Order is placed.");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handelClick}>Place order</button>
    </>
  );
};

export default OrderProduct;
