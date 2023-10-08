import { getPostsFromFolder } from "@/data/posts/posts";

export default function BlogPage() {
  const postNames: string[] = getPostsFromFolder("posts");
  return (
    <div>
      <h1>This is the main blog page</h1>
      <div>
        {postNames.map((postName) => (
          <div key={postName}>{postName}</div>
        ))}
      </div>
    </div>
  );
}
