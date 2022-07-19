import styles from './Frase.module.css'

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>This is a phrasal component!</p>
    </div>
  )
}

export default Frase
