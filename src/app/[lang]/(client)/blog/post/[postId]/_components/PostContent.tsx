"use client";

import { useSuspenseQuery } from "@apollo/client";
import { GET_POST, GetPostResult, GetPostVariables } from "../../../_graphql/queries/getPost";
import { Post } from "../../../_types";
import Image from "next/image";

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
    <article className="p-10 mt-20 bg-white rounded-lg shadow-md flex flex-col gap-10">
      <header className="flex items-center gap-3">
        <h1 className="text-4xl">{postData.post.title}</h1>
        <Image
          src={postData.post.ogMetaData.image}
          alt={postData.post.title}
          width={800}
          height={400}
          className="w-full border border-gray-300 h-48 max-w-1/2 object-cover rounded-lg mt-4"
          loading="lazy"
        />
      </header>
      <div dangerouslySetInnerHTML={{__html: postData.post.content.html
        .replace(/<img src="/g, `<img src="${process.env.NEXT_PUBLIC_HASHNODE_BLOG_HOST}`)
        .replace(/<a href="/g, `<a href="${process.env.NEXT_PUBLIC_HASHNODE_BLOG_HOST}`)
      }} />
    </article>
 
  )
}