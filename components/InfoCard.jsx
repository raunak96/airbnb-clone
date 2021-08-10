import Image from "next/image";
import HeartIcon from "../icons/heart.svg";
import StarIcon from "../icons/star.svg";

const InfoCard = ({
	image,
	title,
	description,
	rating,
	price,
	total,
	guests,
	location,
}) => {
	return (
		<div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg hover:scale-y-105 transition duration-200 ease-out first:border-t">
			<div className="relative w-full h-40 sm:h-24 sm:w-40 md:h-52 md:w-80">
				<Image
					src={image[0].secure_url}
					layout="fill"
					objectFit="cover"
					className="rounded-xl"
				/>
			</div>
			<div className="flex flex-col flex-1 pr-5">
				<div className="flex justify-between items-center">
					<p>{location}</p>
					<HeartIcon className="h-7 cursor-pointer" />
				</div>
				<h4 className="text-xl">{title}</h4>
				<div className="w-10 border-b pt-2" />
				<p className="pt-2 text-sm text-gray-500 flex-1">
					{description}
				</p>
				<div className="flex justify-between pt-5">
					<p className="flex items-center">
						<StarIcon className="h-5 text-[#FF385C]" />
						<span>{rating}</span>
					</p>
					<div className="text-right">
						<p className="text-lg lg:text-2xl font-semibold pb-2">
							{price}
						</p>
						<p className="font-light">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
