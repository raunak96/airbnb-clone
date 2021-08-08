import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	useEffect(() => {
		router.events.on("routeChangeStart", () => setLoading(true));
		router.events.on("routeChangeComplete", () => setLoading(false));
		router.events.on("routeChangeError", () => setLoading(false));

		return () => {
			router.events.off("routeChangeStart");
			router.events.off("routeChangeComplete");
			router.events.off("routeChangeError");
		};
	}, []);
	return (
		<>
			{loading && (
				<div className="top-0 left-0 right-0 z-50">
					<div className="mb-4 bg-red-200  rounded-full overflow-hidden">
						<div className="bg-[#FF385C] animate-progress rounded-full h-1" />
					</div>
				</div>
			)}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
