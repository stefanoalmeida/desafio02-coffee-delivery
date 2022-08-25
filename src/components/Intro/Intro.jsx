import styles from './Intro.module.css'

import Items from './../../assets/Items.svg'

import ImgCoffee from './../../assets/Imagem.svg'

export function Intro(){
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        
        <div className={styles.items}>
          <img src={Items} alt="" />
        </div>
      </div>


      <img src={ImgCoffee} alt="" />
    </div>
  )
}