import { gql } from "@apollo/client";

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

const CREATE_USER = gql`
  mutation createUser($name: String!, $password: String!, $email: String!) {
    createUser(name: $name, password: $password, email: $email) {
      _id
      name
      password
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String!, $password: String!, $email: String!) {
    updateUser(id: $id, name: $name, password: $password, email: $email) {
      _id
      name
      password
      email
    }
  }
`;
export { DELETE_USER, CREATE_USER, UPDATE_USER };