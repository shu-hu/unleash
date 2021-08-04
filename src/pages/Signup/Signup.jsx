import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = () => {
  const [message, setMessage] = useState()

  const updateMessage = msg => {
    setMessage({ msg })
  }

  return (
    <main className={styles.container}>
      <h1>Sign Up</h1>
      {message && <p>{message}</p> }
      <SignupForm updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
