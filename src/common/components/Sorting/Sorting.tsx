import styles from './Sorting.module.css'

export const Sorting = () => {
  return (
    <div className={styles.sorting__group}>
      <button className={`${styles.sorting__btn} ${styles.sorting__btn_active}`}>Самый дешевый</button>
      <button className={styles.sorting__btn}>Самый быстрый</button>
      <button className={styles.sorting__btn}>Оптимальный</button>
    </div>
  )
}
