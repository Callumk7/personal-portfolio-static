import Link from "next/link"
import { Tags } from "../../../scripts/build-json"

interface TagListProps {
  tags: Tags
}

export function TagList({tags}: TagListProps) {
  return (
    <div className="grid grid-cols-2 gap-3 w-1/3">
      {Object.entries(tags).map(([tag, count]) => (
          <div key={tag} className="flex flex-row gap-2">
            <Link href={`/blog/tags/${tag}`} className="text-primary-1 underline">{tag}</Link>
            <p className="">({count})</p>
          </div>
      ))}
    </div>
  )
}
