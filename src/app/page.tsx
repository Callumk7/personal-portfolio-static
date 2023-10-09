import { PostCard } from "@/components/posts/post-card";
import { getAllPostData } from "@/lib/api/posts";

export default function Home() {
  const posts = getAllPostData();
  return (
    <main>
      <div>
        <h1>Callum Kloos</h1>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
