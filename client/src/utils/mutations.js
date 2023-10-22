import { gql } from '@apollo/client';

//need to add players dob & name 
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($profileId: ID!, $player: String!) {
    addPlayer(profileId: $profileId, player: $player) {
      _id
      name
      players
    }
  }
`;



export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_PLAYER = gql`
  mutation removePlayer($player: String!) {
    removePlayer(player: $player) {
      _id
      name
      players
    }
  }
`;


