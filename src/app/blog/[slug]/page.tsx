import { PostBody } from "@/components/posts/body";
import { PostTitle } from "@/components/posts/title";
import markdownToHtml from "@/lib/api/markdown-to-html";
import { getAllPostData, getPostBySlug } from "@/lib/api/posts";

// generate routes at build time
export function generateStaticParams() {
  const posts = getAllPostData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post?.content);

  return (
    <div>
      <PostTitle title={post?.title} />
      <PostBody content={content} />
    </div>
  );
}
