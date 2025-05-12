import { nanoid } from 'nanoid'
import { FilterItem } from '../FilterItem/FilterItem'
import styles from './FiltrationList.module.css'

export const FiltrationList = () => {
  // const filtrationTitles = [ // может понадобится для более сложной структуры
  //   'Все',
  //   'Без пересадок',
  //   '1 пересадка',
  //   '2 пересадки',
  //   '3 пересадки',
  // ]

  return (
    <div className={styles.filtration__list}>
      <FilterItem title="Все" id={nanoid()} filter="all" />
      <FilterItem title="Без пересадок" id={nanoid()} filter="0" />
      <FilterItem title={'1 пересадка'} id={nanoid()} filter="1" />
      <FilterItem title={'2 пересадки'} id={nanoid()} filter="2" />
      <FilterItem title={'3 пересадка'} id={nanoid()} filter="3" />
    </div>
  )
}
