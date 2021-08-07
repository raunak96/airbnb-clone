const Footer = () => {
	return (
		<footer className="bg-gray-100 text-gray-600">
			<div className="container mx-auto grid xs:grid-cols-2 md:grid-cols-4 gap-y-10 px-12 py-14 text-center">
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold uppercase">About</h5>
					<p>How Airbnb works</p>
					<p>Newsroom</p>
					<p>Investors</p>
					<p>Airbnb Plus</p>
					<p>Airbnb Luxe</p>
				</div>
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold uppercase">Community</h5>
					<p>Accessibility</p>
					<p>Clone</p>
					<p>Tailwind</p>
					<p>NextJs</p>
					<p>Refer</p>
				</div>
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold uppercase">Host</h5>
					<p>Vercel</p>
					<p>Netlify</p>
					<p>Presents</p>
					<p>Wmt</p>
					<p>Join Now</p>
				</div>
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold uppercase">Support</h5>
					<p>Help Center</p>
					<p>Chat with us</p>
					<p>Email</p>
					<p>Call</p>
					<p>FAQs</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
