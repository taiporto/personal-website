"use client"

import { useSuspenseQuery } from "@apollo/client";
import { GET_RECENT_POSTS, GetRecentPostsResult, GetRecentPostsVariables } from "../_graphql/queries/getRecentPosts";
import { HASHNODE_BLOG_HOST } from "@/lib/hashnode";
import { PostItem } from "./PostItem";

export const RecentPostList = () => {
  const {
    data: recentPosts,
    error,
  } = useSuspenseQuery<GetRecentPostsResult, GetRecentPostsVariables>(
    GET_RECENT_POSTS,
    {
      variables: {
        host: HASHNODE_BLOG_HOST,
      },
    }
  );

  if (error) return null;

  return (
    <ul>
      {recentPosts?.publication.posts.edges.map(({ node }) => (
        <PostItem key={node.url} postData={node} />
      ))}
    </ul>
  )
}