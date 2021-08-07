import Image from "next/image";

const Banner = () => {
	return (
		<div className="relative h-72 sm:h-80 lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image src="/images/banner.webp" layout="fill" objectFit="cover" />
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg">
					Not sure where to go? Perfect.
				</p>
				<button className="my-3 text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-200">
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
