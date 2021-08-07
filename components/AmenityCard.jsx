import Image from "next/image";

const AmenityCard = ({ title, image }) => {
	return (
		<div className="cursor-pointer hover:scale-105 transition duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image
					src={image[0].secure_url}
					layout="fill"
					className="rounded-xl"
				/>
			</div>
			<h3 className="text-2xl mt-3">{title}</h3>
		</div>
	);
};

export default AmenityCard;
