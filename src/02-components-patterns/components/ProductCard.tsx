import { createContext, ReactElement } from "react";
import useProduct from "../hooks/useProduct";

// @ts-ignore
import styles from "../styles/styles.module.css";

import { ProductContextProps, Product, onChangeArgs } from '../interfaces/index';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}


export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({
    onChange, 
    product,
    value
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
