import styles from './CoffeList.module.css'
import CoffesImg from './../../assets/Coffee.svg'

import {ShoppingCart, Minus, Plus} from 'phosphor-react'


export function CoffeList() {
  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <img src={CoffesImg} alt="" />
        <span>Tradicional</span>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <div className={styles.footer}>
          <div>R$ <strong>9,90</strong></div>
          <div className={styles.cart}>
            <div>
              <button className={styles.btn}>
                <Minus size={14} weight='bold'/>
              </button>
              1
              <button className={styles.btn}>
                <Plus size={14} weight='bold'/>
              </button>
            </div>

            <button>
              <ShoppingCart size={22} weight='fill'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}