import Head from "next/head";

const Layout = ({ title, keywords, description, children, categories }) => {
	return (
		<div className="App">
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords.join(", ")} />
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<div>{children}</div>
		</div>
	);
};

Layout.defaultProps = {
	title: "Airbnb 2.0: Holiday Rentals, Cabins, Beach Houses, Unique Homes &amp; Experiences",
	description:
		"Find best and most affordable holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb 2.0.",
	keywords: [
		"date picker",
		"mapBox",
		"nextjs",
		"vercel",
		"tailwindCss",
		"react",
	],
};
export default Layout;
