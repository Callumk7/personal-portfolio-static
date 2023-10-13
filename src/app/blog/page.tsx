import { PostCard } from "@/components/posts/post-card";
import { getAllPostData } from "@/lib/api/posts";
import { TagList } from "./tag-list";
import { getTags } from "@/lib/api/tags";

export default function BlogPage() {
  const posts = getAllPostData();
  const tags = getTags();

  return (
    <>
      <div className="divide-y divide-foreground/20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 font-syne text-3xl font-extrabold leading-9 tracking-tight  text-foreground sm:text-4xl sm:leading-10 md:text-6xl">
            Latest
          </h1>
          <TagList className="pb-10" tags={tags} />
        </div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
