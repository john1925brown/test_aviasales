import styles from './Ticket.module.css'
import { TicketMain } from './TictetMain/TicketMain'
export const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <p className={styles.price}>13 400 Р </p>
        <img src="/public/S7 Logo.svg" alt="S7 logo" />
      </div>
      <TicketMain/>
    </div>
  )
}
