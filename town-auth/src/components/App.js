import React from "react";
import { SignUp } from "./SignUp";
import { Container } from 'react-bootstrap'

export const App = () => {
  return (
    <Container 
    className="d-flex align-items-center just-content-center"
    style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: "400px"}}></div>
      <SignUp />
    </Container>
  )
};

export default App;
