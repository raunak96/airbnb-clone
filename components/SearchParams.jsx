import { useRef, useState } from "react";
import SearchCalender from "./SearchCalender";
import UsersIcon from "../icons/users.svg";
import { useRouter } from "next/router";

const SearchParams = ({ location, setLocation }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const guestsRef = useRef(null);
	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		router.push({
			pathname: "/search",
			query: {
				location,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noOfGuests: guestsRef.current.value,
			},
		});
		setLocation("");
	};
	return (
		<form
			className="max-w-full col-span-4 lg:col-span-3 mx-auto mt-2 overflow-x-auto scrollbar-hide"
			onSubmit={handleSubmit}>
			<SearchCalender
				startDate={startDate}
				endDate={endDate}
				setStartDate={setStartDate}
				setEndDate={setEndDate}
			/>
			<div className="flex items-center justify-between border-b pb-4">
				<h2 className="text-2xl font-semibold ">Number of guests</h2>
				<div className="flex space-x-2 items-center p-2">
					<UsersIcon className="h-5" />
					<input
						ref={guestsRef}
						defaultValue={1}
						onChange={() => guestsRef.current.value}
						min={1}
						type="number"
						className="outline-none w-10 pl-2 text-lg text-[#FF385C]"
					/>
				</div>
			</div>
			<div className="flex justify-around mt-2">
				<button
					className="text-gray-500"
					onClick={() => setLocation("")}>
					Cancel
				</button>

				<button type="submit" className="text-[#FF385C]">
					Search
				</button>
			</div>
		</form>
	);
};

export default SearchParams;
