import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import { items } from './data'
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }
  return notFound()
}


const Category = ({ params }) => {

  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="Смотреть весь альбом" url={item.album} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
            />
            <Image
              className={styles.img}
              src={item.image2}
              alt={item.title}
              width={item.width}
              height={item.height}
            />
            <Image
              className={styles.img}
              src={item.image3}
              alt={item.title}
              width={item.width}
              height={item.height}
            />
          </div>
        </div>
      ))}
      <div className={styles.btn}>
        <Button text="Смотреть еще" url="/portfolio" />
      </div>
    </div>
  )
}

export default Category