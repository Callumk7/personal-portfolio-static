// for every file in the posts file we want to create an entry in the json,
// which we can use to create our blog posts

import path from "path";
import fs, { PathLike } from "fs";
import matter from "gray-matter";
import { Post } from "@/types/posts";

// file path: /posts

const getPostsFromFolder = (folder: string): string[] => {
	const fullPath = path.join(process.cwd(), folder);
	const files = fs.readdirSync(fullPath, "utf8");
	return files;
};

const createSlug = (title: string) => {
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

const getDataFromFile = (filePath: PathLike): Post => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	const { title, description, coverImageUrl, date, author } = data;
	if (!title || !description || !coverImageUrl || !date || !author) {
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
		slug,
	};
};

const writeToFile = (data: Post, fileName: string) => {
	const jsonData = JSON.stringify(data, null, 2);
	fs.writeFileSync(fileName, jsonData, "utf8");
};

const pathname = path.join(process.cwd(), "posts", "template.md");
const data = getDataFromFile(pathname);

writeToFile(data, "data.json");
