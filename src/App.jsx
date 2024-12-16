import { useState } from 'react'
import './App.css'
import styled from 'styled-components';


function App() {

  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius:10px;
  background: #00b7c2;
  font-family: 'Arial', sans-serif;
`;

const LoginBox = styled.div`
  padding: 40px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
    background: white;

`;

const Title = styled.h1`
  font-size: px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  
`;

const Button = styled.button`
  width: 425px;
  padding: 12px;
  background-color: #2575fc;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1a5bb8;
  }
`;

const Reg = styled.div`
  margin-top: 20px;
  text-align: start;
  color: blue;
  font-size: 14px;
`;


  return (
    <>
      <Container>
      <LoginBox>
        <Title>Login</Title>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
        <Reg><a href="">New User?</a></Reg>
      </LoginBox>
    </Container>
  
  
    </>
  )
}

export default App
