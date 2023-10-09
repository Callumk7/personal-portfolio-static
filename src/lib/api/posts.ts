import path from "path";
import fs, { PathLike } from "fs";
import matter from "gray-matter";
import { Post } from "@/types/posts";

export const createSlug = (title: string) => {
	let slug = "";
	const words = title.split(" ");
	for (let index = 0; index < words.length; index++) {
		slug += words[index].toLowerCase().replace(/[^0-9a-z]/g, "");
		if (index !== words.length - 1) {
			slug += "-";
		}
	}
	return slug;
};

export const getDataFromFile = (filePath: PathLike): Post => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	const { title, description, coverImageUrl, date, author, tags } = data;
	if (!title || !description || !coverImageUrl || !date || !author || !tags) {
		throw new Error("A required field is missing");
	}

	const slug = createSlug(title);

	return {
		title,
		description,
		content,
		coverImageUrl,
		date,
		author,
		tags,
		slug,
	};
};

export const getAllPostData = (): Post[] => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "src", "data", "posts", "posts.json"),
		"utf8",
	);

	const posts: Post[] = JSON.parse(jsonData);
	return posts;
};

export const getPostBySlug = (slug: string) => {
	const posts = getAllPostData();

	const post = posts.find((post) => post.slug === slug);

	return post;
};
