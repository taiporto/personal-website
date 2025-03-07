import Link from "next/link"
import { Post } from "../_types"

export const PostItem = ({
  postData
}: {
  postData: Post
}) => {
    return (
      <li>
        <Link href={`/blog/post/${postData.id}`}>{postData.title}</Link>
        <p>{postData.brief}</p>
      </li>
    )
}