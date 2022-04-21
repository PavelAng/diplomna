import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            DIPLOMNATA MI RABOTA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>NAMERI NI AKO IMAME ADRES</h1>
          <p className={styles.text}>
            Primeren adres
            <br /> Ruse 7004
            <br /> +359 876 666 666
          </p>
          <p className={styles.text}>
            Drug primeren adres, moje i da nqma
            <br /> Varna, ne znam poshtenskiq kod
            <br /> +359 sushtiq nomer
          </p>
          <p className={styles.text}>
            Ohste edin primeren adres
            <br /> Plovdiv
            <br /> 089666666
          </p>
          <p className={styles.text}>
            posleden primeren adres obeshtavam
            <br /> Sofiq
            <br /> 666666666
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Rabotno vreme ako ima</h1>
          <p className={styles.text}>
            Ponedelnik do Petuk
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            Subota do Nedelq
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
