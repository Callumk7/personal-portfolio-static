import { Post } from "@/types/posts";
import path from "path";
import fs from "fs";
import { getDataFromFile } from "@/lib/api/posts";

const getFilenamesFromFolder = (folder: string): string[] => {
	const fullPath = path.join(process.cwd(), folder);
	const files = fs.readdirSync(fullPath, "utf8");
	return files;
};

const writeToFile = (data: Post[], fileName: string) => {
	const jsonData = JSON.stringify(data, null, 2);
	fs.writeFileSync(fileName, jsonData, "utf8");
};

const buildJson = (folder: string) => {
	// get all the filenames, then extract data into new object, and write to json
	const fileNames = getFilenamesFromFolder(folder);
	let postData: Post[] = [];
	for (const fileName of fileNames) {
		postData.push(getDataFromFile(path.join(process.cwd(), folder, fileName)));
	}

	writeToFile(postData, "src/data/posts/posts.json");
};

buildJson("posts");
