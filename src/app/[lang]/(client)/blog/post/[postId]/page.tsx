import { PostContent } from "./_components/PostContent";

export default async function Post({
  params
}: {
  params: Promise<{postId: string}>
}) {
  const {postId} = await params;

  return (
    <PostContent postId={postId} />
  )
}