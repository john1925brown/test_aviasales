import Checkbox from '@mui/material/Checkbox'
import styles from './FilterItem.module.css'
import { useAppDispatch } from '../../../../app/hooks'
import {
  changeFilterAC,
  type TransferFilter,
} from '../../../../features/Filtration/FiltrationSlice'

type FilterItemPropsType = {
  title: string
  id: string
  filter: TransferFilter
}

export const FilterItem = ({ title, id, filter }: FilterItemPropsType) => {
  const dispatch = useAppDispatch()

  const changeFilter = () => {
    dispatch(changeFilterAC({ id, filter }))
  }

  return (
    <div className={styles.wrapper}>
      <Checkbox onChange={changeFilter} />
      <span className={styles.filter__title}>{title}</span>
    </div>
  )
}
