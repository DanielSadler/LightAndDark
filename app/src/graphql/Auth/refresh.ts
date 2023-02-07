import gql from "graphql-tag";

export const refresh = gql`
  mutation Refresh($refreshData: RefreshInput!) {
    refresh(refreshData: $refreshData) {
      refresh_token
      access_token
    }
  }
`;
