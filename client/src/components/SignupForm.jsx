import React from "react";
import { Row, Col } from "react-bootstrap";
import CoverResize from "../assets/images/CoverResize.png";
import SignUpForm from "../components/SignupForm";


export default function SignUp() {
  return (
    <div
      style={{
        backgroundImage: `url(${CoverResize})`,
        height: "120vh",
        backgroundSize: "cover",

        padding: "3rem",
        color: "white",
      }}
    >
       <h1 style={{ fontSize: "4rem" }}>SIGN UP...</h1>
      <Row >
        <Col sm={5}>
       
        <br></br>
        <p className="text-decoration-underline">Sign Up to Register</p>

        <p>
          1. Complete the form & click the submit button to register for events.{" "}
          <br></br>2. You'll be redirected to login. <br></br>3. Once logged in,
          navigate to <a href="/clinics">Clinics</a> to register. <br></br>4.
          Select the Clinic or Event of interest and click "Register" button.{" "}
          <br></br>5. Be sure to save your login info to register for current &
          future events.
        </p>

        <div style={{ marginTop: "5rem" }}>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

        </Col>
        <Col sm={7}
              style={{
                paddingTop: "2rem",
                paddingBottom : "10rem",
                color: "white",
              }}
              >
                <SignUpForm />
        </Col>
      </Row>
    </div>
  );
}

