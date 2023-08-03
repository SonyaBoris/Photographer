import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/fon.jpg" width={909} height={303} />
      </div>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Прайс</h1>
        <h2 className={styles.imgDesc}>Стоимость 1 часа съемки - 4000 рублей</h2>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <ul className={styles.title}>Что входит в стоимость?
            <li className={styles.desc}>Помощь в организации фотосессии</li>
            <li className={styles.desc}>Подборка референсов</li>
            <li className={styles.desc}>Выбор образа</li>
            <li className={styles.desc}>Поиск и выбор места проведения фотосессии</li>
            <li className={styles.desc}>Цветокоррекция и обработка сделанных фотографий</li>
            <li className={styles.desc}>Помощь в позировании</li>
          </ul>
        </div>

        <div className={styles.item}>
          <div className={styles.title}>Что не входит в стоимость?</div>
          <ul>
            <li className={styles.desc}>Оплата студии</li>
            <li className={styles.desc}>Аренда реквизита</li>
            <li className={styles.desc}>Изменения в обработке фотографий</li>
          </ul>
        </div>
      </div>
      <div className={styles.btn}>
        <Button url="/contact" text="Записаться" />
      </div>
    </div>
  );
};

export default About;
