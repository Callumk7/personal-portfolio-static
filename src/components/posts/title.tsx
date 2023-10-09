export function PostTitle({ title }: { title: string }) {
  return (
    <div className="w-3/4 mx-auto mt-10 mb-8">
      <h1 className="font-black font-syne text-5xl">{title}</h1>
    </div>
  );
}
