import Link from "next/link"
import { Post } from "../_types"
import Image from "next/image"

export const PostItem = ({
  postData
}: {
  postData: Post
}) => {
    return (
      <li className="hover:bg-purple-200/20 active:bg-purple-200/40 p-4 rounded-lg relative gap-3 flex">
        {postData.coverImage && (
          <Image
            src={postData.coverImage?.url}
            alt={postData.title}
            width={400}
            height={200}
            className="h-[120px] w-40 border-b border-gray-200 object-cover rounded-lg"
            loading="lazy"
          />
        )}
        <div className="flex flex-col">
          <div className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 bg-clip-text hover:text-transparent transition-all">
            <h2 className="text-xl font-medium mb-2">
              <Link className="before:absolute before:top-0 before:left-0 before:h-30 before:w-full transition-all" href={`https://taiporto.hashnode.dev/${postData.slug}`}>{postData.title}</Link>
            </h2>
          </div>
          <p>{postData.brief}</p>
        </div>
      </li>
    )
}