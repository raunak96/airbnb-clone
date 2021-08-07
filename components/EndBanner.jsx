import Image from "next/image";

const EndBanner = () => {
	return (
		<section className="relative py-16 cursor-pointer">
			<div className="relative h-96 min-w-[300px]">
				<Image
					src="/images/endBanner.webp"
					layout="fill"
					objectFit="cover"
					className="rounded-2xl"
				/>
			</div>
			<div className="absolute top-1/4 left-12 w-80">
				<h3 className="text-4xl mb-3">The Greatest Outdoors</h3>
				<p>Wishlist curated by AirBnB</p>
				<button className="bg-gray-900 text-white rounded-lg px-4 py-2 text-sm mt-5">
					Get Inspired
				</button>
			</div>
		</section>
	);
};

export default EndBanner;
