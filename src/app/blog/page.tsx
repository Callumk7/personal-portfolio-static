import { PostCard } from "@/components/posts/post-card";
import { getAllPostData } from "@/lib/api/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPostData();

  return (
    <div className="divide-y divide-foreground/20">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold text-foreground font-syne leading-9 tracking-tight  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest
        </h1>
        <p className="text-lg leading-7">
          Posts on programming, learning and growing in a mad world
        </p>
      </div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
