import Image from "next/image";

const CityCard = ({ image, location, distance }) => {
	return (
		<div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-in-out p-3">
			<div className="relative h-16 w-16">
				<Image
					src={image[0].secure_url}
					layout="fill"
					className="rounded-lg"
				/>
			</div>
			<div>
				<h2>{location}</h2>
				<h3 className="text-gray-500">{distance}</h3>
			</div>
		</div>
	);
};

export default CityCard;
