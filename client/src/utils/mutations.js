import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $email: String!, $cellphone: String!, $password: String!) {
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



const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export { ADD_USER, LOGIN_USER };
