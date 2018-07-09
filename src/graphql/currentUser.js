import gql from 'graphql-tag';

export const GET_CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser{
      _id,
      email,
      jwt,
    }
  }
`;
