import { Header } from '../common/components/Header/Header'
import { Main } from '../common/components/Main/Main'
import styles from './App.module.css'

function App() {
  // const filter = []

  return (
    <div className={styles.container}>
      <Header />
      <Main/>
    </div>
  )
}

export default App
