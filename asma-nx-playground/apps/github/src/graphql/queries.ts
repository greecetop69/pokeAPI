import { gql } from '@apollo/client';

// export const GET_TOP_REPOSITORIES = gql`
//   query getTopRepositories($count: Int!) {
//     search(query: "stars:>1", type: REPOSITORY, first: $count) {
//       repositoryCount
//       edges {
//         node {
//           ... on Repository {
//             id
//             name
//             description
//             createdAt
//             url
//             stargazerCount
//             owner {
//               # id
//               avatarUrl
//               login
//               url
//             }
//             forks {
//               totalCount
//             }
//             primaryLanguage {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_TOP_REPOSITORIES = gql`
  query getTopRepositories($count: Int!) {
    search(query: "stars:>1", type: REPOSITORY, first: $count) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              # id
              avatarUrl
              login
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_INFO = gql`
  query getUserInfo($userLogin: String!) {
    user(login: $userLogin) {
      name
      login
      email
      bio
      avatarUrl
      websiteUrl
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;
