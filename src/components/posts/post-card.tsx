import { Post } from "@/types/posts";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-2 p-3 hover:bg-background-hover"
    >
      <p className="text-sm font-mono text-foreground/60">{date.toDateString()}</p>
      <h1 className="font-syne font-bold text-lg text-primary-1">{post.title}</h1>
      <p className="font-mono">{post.description}</p>
    </Link>
  );
}
