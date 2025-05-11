import Checkbox from '@mui/material/Checkbox'
import styles from './FilterItem.module.css'

type FilterItemPropsType = {
  title: string
}

export const FilterItem = ({title}: FilterItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox />
      <span>{title}</span>
    </div>
  )
}
