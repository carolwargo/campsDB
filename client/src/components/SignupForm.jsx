import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SIGNUP_MUTATION = gql`
  mutation Mutation($firstname: String!, $lastname: String!, $email: String!, $cellphone: String!, $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, email: $email, cellphone: $cellphone, password: $password) {
      token
      user {
        _id
        firstname
        lastname
        email
        cellphone
        password
      }
    }
  }
`;

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = async ({ email, firstName, lastName, cellphone, password }) => {
    try {
      const response = await signup({
        variables: {
          email: email.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          cellphone: cellphone.trim(),
          password: password.trim(),
        },
      });

      if (response.data) {
        history.push('/redirect');
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred during signup :(</p>;
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col lg={12} sm={6} className="text-center">
          <Form id="signupForm" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mb-4">Sign Up</h3>

            <Form.Group controlId="firstName" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('firstName', { required: "First name is required." })}
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </Form.Group>



            <Form.Group controlId="lastName" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('lastName', { required: "Last name is required." })}
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </Form.Group>



            <Form.Group controlId="email" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('email', { required: "Email is required." })}
                type="email"
                placeholder="Enter email"
              />
              {errors.email && <p>{errors.email.message}</p>}
              <Form.Text className="text-muted">
               
              </Form.Text>
            </Form.Group>



            <Form.Group controlId="cellphon" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('cellphone', { required: "cellphone is required." })}
                type="text"
                placeholder="cellphone"
              />
              {errors.cellphone && <p>{errors.cellphone.message}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('password', { required: "Password is required." })}
                type="password"
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
