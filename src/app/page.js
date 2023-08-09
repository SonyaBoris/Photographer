import Button from '@/components/button/Button';
import Carousel from '@/components/carousel/Carousel';

import styles from './page.module.css';


export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Борисова София
        </h1>
        <p className={styles.desc}>
          Приветствую! Меня зовут София, я самарский фотограф.
          С радостью проведу для Вас съемку разной тематики
        </p>
        <Button url="/portfolio" text="Посмотреть работы" />
      </div>
      <Carousel />
    </main>
  )
}
