import React, { useContext, useState } from 'react'
import styles from './Login.module.scss'
import instance from '../../api'
import { useNavigate} from 'react-router-dom'
import {GlobalContext} from '../../Context'

const Login = () => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const getAuthContext = useContext(GlobalContext)
  let navigate = useNavigate()
  const handleLogin = () => {
    (
      async () =>{
        try {getAuthContext.setAuth(userName)
          localStorage.setItem('accessToken', '123')
          navigate('/')
        }
        catch (error){
          
        }
      }
    )()
  }
  return (
    <div class={styles.login} >
        <form class={styles.inputContainer}>
            <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input 
                  value={userName}
                  onChange={(e) => {setUsername(e.target.value)}}
                  type="email" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input 
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                  type="password" class="form-control"></input>
            </div>
            <button 
              onClick={() => handleLogin() }
              type="submit" class="btn btn-primary mb-4">Submit</button>
        </form>
    </div>
  )
}

export default Login
