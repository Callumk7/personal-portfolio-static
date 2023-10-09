interface Post  {
	title: string;
	description: string;
	content: string;
	coverImageUrl: string;
	date: string;
	author: Author;
	tags: string[];
	slug: string;
};

interface Author  {
	name: string;
	imageUrl: string;
};

export type { Post, Author };
