import styles from './Filtration.module.css'
import { FormGroup } from '@mui/material'
import { FilterItem } from './FilterItem'

export const Filtration = () => {
  return (
    <article className={styles.filtration}>
      <h3 className={styles.title}>Количество пересадок</h3>
      <FormGroup>
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </FormGroup>
    </article>
  )
}
