"use client";

import { useSuspenseQuery } from "@apollo/client";
import { GET_POST, GetPostResult, GetPostVariables } from "../../../_graphql/queries/getPost";
import { Post } from "../../../_types";

export const PostContent = ({
  postId
}: {
  postId: Post["id"]
}) => {

  const {data: postData, error} = useSuspenseQuery<GetPostResult, GetPostVariables>(GET_POST, {
    variables: {
      postId
    }
  });

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <article>
      <h1>{postData.post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: postData.post.content.html
        .replace(/<img src="/g, `<img src="${process.env.NEXT_PUBLIC_HASHNODE_BLOG_HOST}`)
        .replace(/<a href="/g, `<a href="${process.env.NEXT_PUBLIC_HASHNODE_BLOG_HOST}`)
      }} />
    </article>
 
  )
}