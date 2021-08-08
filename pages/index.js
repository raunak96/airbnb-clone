import AmenityCard from "../components/AmenityCard";
import Banner from "../components/Banner";
import CityCard from "../components/CityCard";
import EndBanner from "../components/EndBanner";
import Layout from "../components/Layout";
import { getAllData } from "../lib/gql";

const HomePage = ({ cities, amenities }) => {
	return (
		<Layout>
			<Banner />

			<main className="container mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">
						Explore Nearby
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{cities?.map(city => (
							<CityCard key={city.sys.id} {...city} />
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-8">
						Live Anywhere
					</h2>
					<div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
						{amenities.map(amenity => (
							<AmenityCard key={amenity.sys.id} {...amenity} />
						))}
					</div>
				</section>

				<EndBanner />
			</main>
		</Layout>
	);
};

export async function getStaticProps(context) {
	const { cities, amenities } = await getAllData();
	return {
		props: { cities, amenities },
	};
}

export default HomePage;
