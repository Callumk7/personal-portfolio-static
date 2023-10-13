import { PostBody } from "@/components/posts/body";
import { PostTitle } from "@/components/posts/title";
import { Container } from "@/components/ui/container";
import markdownToHtml from "@/lib/api/markdown-to-html";
import { getAllPostData, getPostBySlug } from "@/lib/api/posts";
import Image from "next/image";

// generate routes at build time
export function generateStaticParams() {
  const posts = getAllPostData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post does not exist</div>
  }

  const date = new Date(post.date).toDateString();
  const content = await markdownToHtml(post.content);

  return (
    <div className="relative">
      <div className="w-1/2 mx-auto relative aspect-square rounded-md overflow-hidden">
        <Image src={post.coverImageUrl} alt="cover image" className="w-full h-full object-cover object-center" fill />
      </div>
      <p className="text-sm py-2 text-foreground/80 w-full text-center">{date}</p>
      <Container>
        <PostTitle title={post.title} />
        <div className="flex flex-row gap-x-5">
          {post.tags.map(tag => (
            <span className="bg-white text-background px-2 py-1 text-sm rounded-full font-mono" key={tag}>{tag}</span>
          ))}
        </div>
      </Container>
      <PostBody content={content} />
    </div>
  );
}
