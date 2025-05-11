import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/public/Logo.png" alt="logo" />
    </header>
  )
}
