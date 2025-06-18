import Link from "next/link"
import { Post } from "../_types"

export const PostItem = ({
  postData
}: {
  postData: Post
}) => {
    return (
      <li className="hover:bg-purple-100/40 p-4 rounded-lg transition-all relative">
        <h2 className="text-xl font-medium mb-2">
          <Link className="before:absolute before:top-0 before:left-0 before:h-30 before:w-full hover:underline" href={`/blog/post/${postData.id}`}>{postData.title}</Link>
        </h2>
        <p>{postData.brief}</p>
      </li>
    )
}