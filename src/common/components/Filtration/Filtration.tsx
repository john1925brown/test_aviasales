import styles from './Filtration.module.css'
import { FiltrationList } from './FiltrationList/FiltrationList'

export const Filtration = () => {
  return (
    <article className={styles.filtration}>
      <h3 className={styles.title}>Количество пересадок</h3>
      <FiltrationList />
    </article>
  )
}
