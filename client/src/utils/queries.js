import { gql } from '@apollo/client';


export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      firstname
      lastname
      email
      password
    }
  }
`;


export const GET_USER = gql`
  query GetUser($email: String!) {
    user(email: $email) {
        _id
        firstname
        lastname
        email
        password
    }
  }
`;

