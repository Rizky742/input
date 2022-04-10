import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    let [login, setLogin] = useState(false)
    let navigate = useNavigate()


    async function register(e) {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        }
        axios.post('http://localhost:5000/login', data)
            .then(result => {
                if (result.data.status != "error") {
                    navigate("/dashboard")
                    sessionStorage.setItem('token', result.data.acces_token)
                    sessionStorage.setItem('isLogin', "berhasil")
                }
            })
    }

    return (
        <div>
            <form onSubmit={register}>
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>submit</button>

            </form>
        </div>
    )
}

export default Login