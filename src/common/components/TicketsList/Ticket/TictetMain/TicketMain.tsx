import styles from './TicketMain.module.css'

export const TicketMain = () => {
  return (
    <div className={styles.ticket__main}>
      <div className={styles.info__group}>
        <p className={styles.info__description}>MOW – HKT</p>
        <p className={styles.info}>10:45 – 08:00</p>
      </div>
      <div className={styles.info__group}>
        <p className={styles.info__description}>В пути</p>
        <p className={styles.info}>21ч 15м</p>
      </div>
      <div className={styles.info__group}>
        <p className={styles.info__description}>2 пересадки</p>
        <p className={styles.info}>HKG, JNB</p>
      </div>
    </div>
  )
}
