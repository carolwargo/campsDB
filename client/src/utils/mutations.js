import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $email: String!,  $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
        email
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
