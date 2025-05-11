import { Filtration } from '../Filtration/Filtration'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <Filtration />
      </section>
      <section>sorting ticketsList</section>
    </main>
  )
}
