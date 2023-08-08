import styles from './page.module.css'
import Button from '@/components/Button/Button'
import ImgStar from './../components/StarImg/StarImg'

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
        <Button className={styles.button} url="/portfolio" text="Посмотреть работы" />
      </div>
      <ImgStar />
    </main>
  )
}
