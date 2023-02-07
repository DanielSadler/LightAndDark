import gql from 'graphql-tag';

export const login = gql`
  mutation Login($loginData: LoginInput!) {
    login(loginData: $loginData) {
      access_token
      refresh_token
    }
  }
`;
