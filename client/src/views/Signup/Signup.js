import React from "react";
import Signup from "../../components/SignupForm/SignupForm";
import { Container } from "react-bootstrap";

export default function SignupPage() {
  return(
    <div>
      <Container className="pb-5 pt-5">
      <Signup/>
      </Container>
    </div>
  )
}