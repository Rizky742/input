import axios from 'axios'
import React, { useState } from 'react'

function Register() {

    let [email,setEmail] = useState()
    let [username,setUsername] = useState()
    let [password,setPassword] = useState()

    async function register(){
        let data = {
            username: username,
            email: email,
            password: password,
        }
        axios.post('http://localhost:5000/register', data)
        Navigate
    }
  return (
    <div>
        <form  onSubmit={register}>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Register