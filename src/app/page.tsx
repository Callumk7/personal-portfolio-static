import { PostCard } from "@/components/posts/post-card";
import { Container } from "@/components/ui/container";
import { getAllPostData } from "@/lib/api/posts";
import Image from "next/image";

export default function Home() {
  const posts = getAllPostData();
  return (
    <main>
      <Container>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-5">
            <h1 className="mt-6 font-syne text-5xl font-black">Callum Kloos</h1>
            <div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                alt="porrtait"
                fill
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
