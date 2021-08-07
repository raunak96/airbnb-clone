import LogoIcon from "../icons/logo.svg";
import SearchIcon from "../icons/search.svg";
import GlobeIcon from "../icons/globe.svg";
import MenuIcon from "../icons/menu.svg";
import UserIcon from "../icons/user.svg";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white shadow-md p-5 md:px-10 grid grid-cols-3 items-center ">
			<LogoIcon className="h-8 sm:h-10 cursor-pointer" />
			<div className="flex items-center sm:border-2 rounded-full py-3 px-3 sm:shadow-sm focus-within:shadow-md space-x-2">
				<input
					type="text"
					placeholder="Start your Search"
					className="bg-transparent outline-none flex-1 text-sm text-gray-600 placeholder-gray-400"
				/>
				<SearchIcon className="hidden md:block h-8 bg-[#FF385C] text-white rounded-full p-2 cursor-pointer" />
			</div>
			<div className="flex justify-end space-x-4 items-center text-gray-700">
				<p className="hidden md:block cursor-pointer p-3 hover:bg-gray-100 rounded-full font-semibold">
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
		</header>
	);
};

export default Header;