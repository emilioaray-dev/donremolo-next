import Header from './components/header'
import styles from '../styles/Home.module.css'
import CardList from './components/cardList'

function Pizzas() {
  return (
    <div className={styles.backgroundHome}>
      <style jsx>{`

      `}</style>
      <Header />
      <CardList />

    </div>
  )
}

export default Pizzas