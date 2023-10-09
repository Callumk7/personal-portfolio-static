import fs from "fs";
import path from "path";
import { Tags } from "../../../scripts/build-json";

export const getTags = (): Tags => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "src", "data", "posts", "tags.json"),
		"utf8",
	);

	const tags: Tags = JSON.parse(jsonData);
	return tags;
};
