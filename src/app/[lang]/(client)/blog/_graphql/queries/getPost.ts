import { gql } from "@apollo/client";

export type GetPostResult = {
  post: {
    id: string;
    title: string;
    content: {
      html: string;
    };
    ogMetaData: {
      image: string;
    };
  };
};

export type GetPostVariables = {
  postId: string;
};

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    post(id: $postId) {
      title
      content {
        html
      }
      ogMetaData {
        image
      }
    }
  }
`;