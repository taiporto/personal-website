"use client";

import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_RECENT_POSTS, GetRecentPostsResult, GetRecentPostsVariables } from './graphql/queries/getRecentPosts';
import { HASHNODE_BLOG_HOST } from '@/lib/hashnode';

export default function BlogHome() {

  const {data: recentPosts, error, loading} = useQuery<GetRecentPostsResult, GetRecentPostsVariables>(GET_RECENT_POSTS, {
    variables: {
      host: HASHNODE_BLOG_HOST,
    }
  })

  if(error) return null;

  return loading ? (
    <div>
      <h1>Blog Home</h1>
      <p>Loading...</p>
    </div>
  ) : (
    <div>
      <h1>Blog Home</h1>
      <ul>
        {recentPosts?.publication.posts.edges.map(({node}) => (
          <li key={node.url}>
            {node.title}
          </li>
        ))}
      </ul>
    </div>
  )
}