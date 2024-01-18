import Image from 'next/image'
import styles from './home.module.css';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Protecting Our Neighbors</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Nisl ut cursus volutpat egestas. Elementum sed facilisis ut elit odio orci diam libero. Suspendisse vulputate egestas porttitor scelerisque mauris enim sit.</p>
            <Button type="secondary">Get Involved</Button>
          </div>
        </div>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Protecting Our Neighbors</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Nisl ut cursus volutpat egestas. Elementum sed facilisis ut elit odio orci diam libero. Suspendisse vulputate egestas porttitor scelerisque mauris enim sit.</p>
            <Button type="secondary">Get Involved</Button>
          </div>
        </div>
      </div>
    </>
  )
}
