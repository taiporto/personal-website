import { gql } from "@apollo/client";
import { Post } from "../../_types";

export type GetRecentPostsVariables = {
    host: string;
}

export type GetRecentPostsResult = {
    publication: {
        title: string;
        posts: {
            edges: {
                node: Post
            }[]
        }
    }
}

export const GET_RECENT_POSTS = gql`
  query GetRecentPosts($host: String!) {
    publication(host: $host) {
      title
      posts(first: 10) {
        edges {
          node {
            id
            title
            brief
            url
            slug
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;