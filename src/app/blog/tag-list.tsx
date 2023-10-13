import Link from "next/link";
import { Tags } from "../../../scripts/build-json";
import clsx from "clsx";

interface TagListProps {
  tags: Tags;
  className?: string;
}

export function TagList({ tags, className }: TagListProps) {
  return (
    <div className={clsx([className, "flex flex-row gap-7"])}>
      {Object.entries(tags).map(([tag, count]) => (
        <div key={tag} className="flex flex-row gap-2">
          <Link
            href={`/blog/tags/${tag}`}
            className="font-mono text-primary-1 underline"
          >
            {tag}
          </Link>
          <p className="">({count})</p>
        </div>
      ))}
    </div>
  );
}
