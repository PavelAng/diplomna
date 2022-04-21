import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product1 }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product1._id}`} passHref>
        <Image src={product1.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{product1.title}</h1>
      <h1 className={styles.manufacturer}>{product1.manufacturer}</h1>
      <span className={styles.price}>${product1.prices[0]}</span>
      <p className={styles.desc}>{product1.desc}</p>
    </div>
  );
};

export default ProductCard;
