import styles from './Filtration.module.css'
import { FilterItem } from './FilterItem/FilterItem'

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
      <div className={styles.filtration__list}>
        {filtrationTitles.map((item, index) => {
          return <FilterItem title={item} key={index} />
        })}
      </div>
    </article>
  )
}
