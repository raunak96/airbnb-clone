import { useEffect, useMemo, useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import StarIcon from "../icons/star.svg";

const Map = ({ locations }) => {
	const [selectedLocation, setSelectedLocation] = useState({});
	/**
	 * Since we have an array of latitude and longitude, we want the map to be visible in such a way that
	 * locations are visible, for that we get a center( like a mean ) coordinate which lies at center
	 * of all the ones we pass
	 * @return {object} latitude and longitude of the center
	 */
	const centerCoordinate = useMemo(() => {
		const allCoordinates = locations.map(({ coordinates }) => ({
			latitude: coordinates.lat,
			longitude: coordinates.lon,
		}));

		return getCenter(allCoordinates);
	}, [JSON.stringify(locations)]);

	const [viewport, setViewport] = useState({
		latitude: centerCoordinate.latitude,
		longitude: centerCoordinate.longitude,
		width: "100%",
		height: "100%",
		zoom: 12,
	});

	/* To close popup on Clicking anywhere on screen except for marker itself where we stopped propagation */
	useEffect(() => {
		document.documentElement.addEventListener("click", () =>
			setSelectedLocation({})
		);
		return () =>
			document.documentElement.removeEventListener("click", () =>
				setSelectedLocation({})
			);
	}, []);

	return (
		<ReactMapGl
			{...viewport}
			mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLES_URL}
			onViewportChange={vp => setViewport(vp)}
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}>
			{locations.map(location => (
				<div key={location.sys.id}>
					<Marker
						latitude={location.coordinates.lat}
						longitude={location.coordinates.lon}
						offsetLeft={-20}
						offsetTop={-10}>
						<p
							className="font-bold cursor-pointer p-2 rounded-full bg-gray-100 animate-bounce"
							onClick={e => {
								e.stopPropagation();
								setSelectedLocation(location);
							}}>
							{location.total.split(" ")[0]}
						</p>
					</Marker>
					{/* Popup to show selected Location info when clicked on map */}
					{selectedLocation.coordinates?.lat ===
						location.coordinates.lat && (
						<Popup
							closeOnClick={true}
							onClose={() => setSelectedLocation({})}
							closeButton={false}
							latitude={location.coordinates.lat}
							longitude={location.coordinates.lon}
							className="z-50">
							<div className="flex flex-col rounded-2xl w-72">
								<div className="relative h-40 w-full bg-black opacity-90">
									<Image
										src={location.image[0].secure_url}
										layout="fill"
										objectFit="cover"
										className="rounded-t-2xl"
									/>
								</div>
								<div className="pt-4 px-3 bg-white flex flex-col space-y-3 rounded-b-2xl">
									<p className="flex items-center space-x-1">
										<StarIcon className="h-5 text-[#FF385C]" />
										<span>{location.rating}</span>
									</p>
									<p className="text-gray-700">
										{location.description}
									</p>
									<p className="font-semibold text-lg">
										{location.price}
									</p>
								</div>
							</div>
						</Popup>
					)}
				</div>
			))}
		</ReactMapGl>
	);
};

export default Map;
