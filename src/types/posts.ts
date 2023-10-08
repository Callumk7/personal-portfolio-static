type Post = {
	title: string;
	description: string;
	content: string;
	coverImageUrl: string;
	date: string;
	author: Author;
	slug: string;
};

type Author = {
	name: string;
	imageUrl: string;
};

export type { Post, Author };
