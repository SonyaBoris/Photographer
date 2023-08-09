import Button from "@/components/button/Button";
import Image from "next/image";

import styles from "./page.module.css";

const arrayCostInclude = ['Помощь в организации фотосессии', 'Подборка референсов', 'Выбор образа',
  'Поиск и выбор места проведения фотосессии', 'Цветокоррекция и обработка сделанных фотографий', 'Помощь в позировании']

const arrayDont = ['Оплата студии', 'Аренда реквизита', 'Изменения в обработке фотографий']

const About = () => {
  return (
    <main className={styles.container}>
      <div className={styles.img}>
        <Image src="/fon.jpg" width={909} height={303} alt="фоновое изображение" />
      </div>
      <div className={styles.mainText}>
        <h1>Прайс</h1>
        <h2 className={styles.price}>Стоимость 1 часа съемки - 4000 рублей</h2>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <ul className={styles.title}>Что входит в стоимость?
            {arrayCostInclude.map((title, index) =>
              <li key={index} className={styles.desc}>{title}</li>)}
          </ul>
        </div>
        <div className={styles.item}>
          <ul className={styles.title}>Что не входит в стоимость?
            {arrayDont.map((title, index) =>
              <li key={index} className={styles.desc}>{title}</li>)}
          </ul>
        </div>
      </div>
      <div className={styles.btn}>
        <Button url="/contact" text="Записаться" />
      </div>
    </main>
  );
};

export default About;
