import { useContext } from "react";

import { ProductContext } from "./ProductCard";

// @ts-ignore
import styles from "../styles/styles.module.css";
// @ts-ignore
import noImg from "../assets/no-image.jpg";

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img='', className, style }: Props) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string = img || product.img || noImg;

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product Image"
    />
  );
};