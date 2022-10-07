import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem('TOKEN')
      if(!token) {
        navigate('/login')
      }
  }, [])
  return (
    <div>
        Welcome Home
        <span>{"Jonny"}</span>
        <button>LOGOUT</button>
    </div>
  )
}

export default Home