type CardProps = {
	title: string;
	subtitle: string;
	iconPath: string;
};

const Card = ({ title, subtitle, iconPath }: CardProps) => {
	return (
		<div className="relative border border-gray-900 bg-black px-10 lg:px-16 mb-10 lg:mb-0 block h-74 lg:h-48 w-full hover:border-white focus:border-white focus:outline-none overflow-x-scroll transition-all ease-in duration-200">
			<div className="flex items-start lg:items-center justify-around lg:justify-between flex-col lg:flex-row h-full w-full py-10 lg:py-0">
				<div className="mt-16 lg:mt-0 order-2 lg:order-none w-full">
					<h2 className="mb-6 font-bold font-mono text-xl">
						{title}
					</h2>
					<p className="font-light font-space-mono text-gray-500">
						{subtitle}
					</p>
				</div>
				<img
					className="pointer-events-none w-10 lg:w-12"
					src={iconPath}
					alt={title}
				/>
			</div>
		</div>
	);
};

export default Card;