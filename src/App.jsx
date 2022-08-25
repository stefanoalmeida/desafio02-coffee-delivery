import './styles/global.css'

import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Intro } from './components/Intro/Intro'
import { CoffeList } from './components/CoffeList/CoffeList'

export function App() {

  return (
    <div className={styles.container}>
      <Header/>

      <Intro/>

      <h2>Nossos cafés</h2>

      <div className={styles.listItems}>
        <CoffeList/>
        <CoffeList/>
        <CoffeList/>
        <CoffeList/>
      </div>
    </div>
  )
}


