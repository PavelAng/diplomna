import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dostavqme na vsqkude</h1>
      <p className={styles.desc}>
        Nqkakuv description, tova e diplomnata rabota na pavel
      </p>
      <div className={styles.wrapper}>
        {productList.map((product1) => (
          <ProductCard key={product1._id} product1={product1} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
