import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.logo__wrapper}>
      <img src="/public/Logo.png" alt="logo" />
    </div>
  )
}
