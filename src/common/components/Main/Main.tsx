import { Filtration } from '../Filtration/Filtration'
import { Sorting } from '../Sorting/Sorting'
import { TicketsList } from '../TicketsList/TicketsList'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <Filtration />
      </section>
      <section className={styles.main__content}>
        <Sorting/>
        <TicketsList/>
        </section>
    </main>
  )
}
