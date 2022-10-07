import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div``
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const Login = styled.div`
`


const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem('TOKEN')
      if(!token) {
        navigate('/login')
      }
  }, [])
  return (
    <Container>
      <Wrapper>
        Home
        <Login> 
        <span>{localStorage.getItem('EMAIL')}</span>
        <button onClick={()=>{
          localStorage.clear()
          navigate("/login")
        }}>LOGOUT</button>
        </Login>
      </Wrapper>
    </Container>
  )
}

export default Home