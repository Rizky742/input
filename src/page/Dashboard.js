import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'

function Dashboard() {
    let [nama,setNama] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        if(sessionStorage.getItem('isLogin') != "berhasil"){
            navigate('/login')
        }
        const api = axios.create({
            baseURL: 'http://localhost:5000/',
            headers: {'Authorization': 'Bearer '+sessionStorage.getItem('token')}
          });
          api.get('/biodata')
          .then(result => {
              setNama(result.data)
          })

    },[])
    function logout(){
        sessionStorage.clear()
        navigate('/login')
    }
  return (
    <div>
        <p>{sessionStorage.getItem('token')}</p>
        {nama.map(hasil => (
            <p>{hasil.nama_lengkap}</p>
        ))}
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Dashboard