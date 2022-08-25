import styles from './Header.module.css'

import Logo from './../../assets/Logo.svg'

import {ShoppingCart, MapPin} from 'phosphor-react'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="" />

      <div className={styles.actions}>
        <button className={styles.buttonLocation}>
          <MapPin size={22} weight="fill"/>
          Mogi das Cruzes, SP
        </button>

        <button className={styles.buttonCart}>
          <ShoppingCart size={32} weight='fill'/>
        </button>
      </div>
    </div>
  )
}