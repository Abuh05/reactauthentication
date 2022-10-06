import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Mobile } from '../responsive';
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mobile({backgroundSize: "fit"})}
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${Mobile({width: "75%"})}
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
    axios.post("http://localhost:5000/signup", {
        email: email,
        password: password
    })
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
          onChange={(e)=> {
            setEmail(e.target.value)}     
          }
          placeholder="Username" 
          value={email}
          />
          <Input
          type="password"
           onChange={(e)=> {
            setPassword(e.target.value)}     
          }
          placeholder="Password" 
          value={password}
          />
          <Button onClick={handleSubmit}>CREATE</Button>
          <NavLink to="/login" >Signin Here</NavLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
