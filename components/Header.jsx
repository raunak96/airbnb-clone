import LogoIcon from "../icons/logo.svg";
import SearchIcon from "../icons/search.svg";
import GlobeIcon from "../icons/globe.svg";
import MenuIcon from "../icons/menu.svg";
import UserIcon from "../icons/user.svg";
import { useMemo, useState } from "react";
import SearchParams from "./SearchParams";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatDate } from "../utils";

const Header = () => {
	const [searchInput, setSearchInput] = useState("");
	const { query } = useRouter();
	const { location, startDate, endDate, noOfGuests } = query;

	const placeholder = useMemo(() => {
		if (Object.keys(query).length > 0)
			return `${location} | ${formatDate(startDate)} - ${formatDate(
				endDate
			)} | ${noOfGuests} guest${noOfGuests > 1 ? "s" : ""}`;
		return "Start your Search";
	}, [location, startDate, endDate, noOfGuests]);

	return (
		<header className="sticky top-0 z-50 bg-white shadow-md p-5 md:px-10 grid grid-cols-4 lg:grid-cols-3 items-center gap-x-2">
			<Link href="/">
				<a>
					<LogoIcon className="h-6 xs:h-8 sm:h-10 cursor-pointer" />
				</a>
			</Link>
			<div className="flex items-center sm:border-2 rounded-full py-3 px-5 sm:shadow-sm focus-within:shadow-md space-x-2 col-span-2 lg:col-span-1">
				<input
					type="text"
					placeholder={placeholder}
					className="bg-transparent outline-none flex-1 overflow-hidden text-sm text-gray-600 placeholder-gray-400"
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
				/>
				<SearchIcon className="hidden md:inline-block h-8 bg-[#FF385C] text-white rounded-full p-2 cursor-pointer" />
			</div>
			<div className="flex justify-end space-x-4 items-center text-gray-700">
				<p className="hidden lg:block cursor-pointer p-3 hover:bg-gray-100 rounded-full font-semibold">
					Become a host
				</p>
				<div className="hidden md:block p-3 hover:bg-gray-100 rounded-full">
					<GlobeIcon className="h-5 cursor-pointer" />
				</div>
				<div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-md cursor-pointer">
					<MenuIcon className="h-6" />
					<UserIcon className="h-6" />
				</div>
			</div>

			{searchInput && (
				<SearchParams
					location={searchInput}
					setLocation={setSearchInput}
				/>
			)}
		</header>
	);
};

export default Header;
