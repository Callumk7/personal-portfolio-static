type Post = {
	title: string;
	description: string;
	content: string;
	coverImageUrl: string;
	date: string;
	author: Author;
	tags: Tag[];
	slug: string;
};

type Author = {
	name: string;
	imageUrl: string;
};

type Tag = {
	name: string;
	color: string;
};

export type { Post, Author };
