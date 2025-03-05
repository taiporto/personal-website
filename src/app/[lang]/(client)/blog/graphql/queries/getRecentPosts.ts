import { gql } from "@apollo/client";

export type GetRecentPostsVariables = {
    host: string;
}

export type GetRecentPostsResult = {
    publication: {
        title: string;
        posts: {
            edges: {
                node: {
                    title: string;
                    brief: string;
                    url: string;
                }
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
                    title
                    brief
                    url
                }
            }
        }
    }
}
`