import { useContext } from "react";

import { ProductContext } from "./ProductCard";

// @ts-ignore
import styles from "../styles/styles.module.css";
// @ts-ignore
import noImg from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string = img || product.img || noImg;

  return (
    <img
      className={styles.productImg}
      src={imgToShow}
      alt="Product Image"
    />
  );
};