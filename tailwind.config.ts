import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				syne: ["var(--font-syne)", ...fontFamily.sans],
			},
			colors: {
				background: {
					DEFAULT: "hsl(var(--background))",
					hover: "hsl(var(--background-hover))",
				},
				foreground: "hsl(var(--foreground))",
				primary: {
					1: "hsl(var(--primary-1))",
					2: "hsl(var(--primary-2))",
					3: "hsl(var(--primary-3))",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
