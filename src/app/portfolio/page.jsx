import Link from 'next/link';
import Button from '@/components/button/Button';

import styles from './page.module.css';

const Portfolio = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.mainTitle}>Виды съемок на которых я специализируюсь</h1>
      <p className={styles.desc}>Здесь вы можете посмотреть мои работы и узнать подробнее о моих услугах</p>
      <section className={styles.items}>
        <Link href="/portfolio/studio" className={styles.item}>
          <span className={styles.title}>Студийная</span>
        </Link>
        <Link href="/portfolio/walk" className={styles.item}>
          <span className={styles.title}>Прогулочная</span >
        </Link>
        <Link href="/portfolio/wedding" className={styles.item}>
          <span className={styles.title}>Свадебная</span>
        </Link>
        <Link href="/portfolio/kids" className={styles.item}>
          <span className={styles.title}>Детская</span>
        </Link>
      </section>
      <div className={styles.btn}>
        <Button url="/contact" text="Запиcаться на съемку" />
      </div>
    </main>
  )
}

export default Portfolio