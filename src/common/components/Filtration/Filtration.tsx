import styles from './Filtration.module.css'
import { FilterItem } from './FilterItem'

export const Filtration = () => {
  const filtrationTitles = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ]

  return (
    <article className={styles.filtration}>
      <h3 className={styles.title}>Количество пересадок</h3>
      <div>
        {filtrationTitles.map((item) => {
          return <FilterItem title={item} />
        })}
      </div>
    </article>
  )
}
