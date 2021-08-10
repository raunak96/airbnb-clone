import { useRouter } from "next/router";
import InfoCard from "../components/InfoCard";
import Layout from "../components/Layout";
import Map from "../components/Map";
import { getAllInns } from "../lib/gql";
import { formatDate } from "../utils";

const SearchResultPage = ({ total, inns }) => {
	const { query } = useRouter();
	const { location, startDate, endDate, noOfGuests } = query;
	return (
		<Layout
			title={`${location[0].toUpperCase()}${location.slice(
				1
			)} · Stays · Airbnb 2.0`}>
			<main className="flex flex-col-reverse lg:flex-row pl-12">
				<section className="flex-1 pt-10">
					<p className="text-sm text-gray-800">
						300+ stays &#183; {formatDate(startDate)} -&nbsp;
						{formatDate(endDate)} &#183; {noOfGuests} guest
						{noOfGuests > 1 ? "s" : ""}
					</p>
					<h1 className="text-2xl mt-2 mb-6">
						Stays in {location} ({total} result{total > 1 && "s"})
					</h1>
					<div className="hidden md:flex space-x-3 text-gray-800 whitespace-nowrap mb-5">
						<p className="filter-btn">Instant Book</p>
						<p className="filter-btn">Price</p>
						<p className="filter-btn">Type of place</p>
						<p className="filter-btn">Cancellation flexibility</p>
						<p className="filter-btn">More filters</p>
					</div>
					<div className="flex flex-col">
						{inns.map(inn => (
							<InfoCard key={inn.sys.id} {...inn} />
						))}
					</div>
				</section>

				<section className="lg:min-w-[600px] ">
					<Map locations={inns} />
				</section>
			</main>
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	const { total, inns } = await getAllInns(query.noOfGuests);
	return {
		props: { total, inns },
	};
}

export default SearchResultPage;
