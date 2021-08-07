import styles from './Landing.module.css'
import ResultMenu from '../../components/Layout/ResultMenu/ResultMenu'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
        {/* hello, {user ? user.name : "dog lover"} */}
        <ResultMenu/>
    </main>
  )
}

export default Landing