import styles from './Ticket.module.css'
export const Ticket = () => {
  return (
    <div>
      <div className={styles.ticket__header}>
        <p className={styles.price}>13 400 Р </p>
        <img src="/public/S7 Logo.svg" alt="S7 logo" />
      </div>
      <div className={styles.ticket__main}>
        <div>
          <p className={styles.info__description}>откуда куда</p>
          <p className={styles.info}>time</p>
        </div>
        <div>
          <p className={styles.info__description}>В пути</p>
          <p className={styles.info}>time flying</p>
        </div>
        <div>
          <p className={styles.info__description}>пересадки</p>
          <p className={styles.info}>cities</p>
        </div>
      </div>
    </div>
  )
}
