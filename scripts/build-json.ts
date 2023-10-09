import { Post } from "@/types/posts";
import path from "path";
import fs, { PathLike } from "fs";
import matter from "gray-matter";

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

	// TODO: Add Zod validation on matter here

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

const getFilenamesFromFolder = (folder: string): string[] => {
	const fullPath = path.join(process.cwd(), folder);
	const files = fs.readdirSync(fullPath, "utf8");
	return files;
};

const writeToFile = (data: any, fileName: string) => {
	const jsonData = JSON.stringify(data, null, 2);
	fs.writeFileSync(fileName, jsonData, "utf8");
};

const buildJson = (folder: string) => {
	// get all the filenames, then extract data into new object, and write to json
	const fileNames = getFilenamesFromFolder(folder);
	const postData: Post[] = [];
	for (const fileName of fileNames) {
		postData.push(
			getDataFromFile(path.join(process.cwd(), folder, fileName)),
		);
	}

	const tags: string[] = [];
	for (const post of postData) {
		post.tags.forEach((tag) => tags.push(tag));
	}

	buildTagsTree(tags);

	writeToFile(postData, "src/data/posts/posts.json");
};

export type Tags = Record<string, number>;

const buildTagsTree = (tags: string[]) => {
	const tagsObj: Tags = {};
	tags.forEach((tag) => {
		if (tagsObj[tag]) {
			tagsObj[tag]++;
		} else {
			tagsObj[tag] = 1;
		}
	});

	writeToFile(tagsObj, "src/data/posts/tags.json");
};

buildJson("posts");
