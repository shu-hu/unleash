import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = () => {
  return (
    <main className={styles.container}>
      <h1>Log In</h1>
      <LoginForm />
    </main>
  )
}
 
export default LoginPage
