import {
	PiArrowUpRightBold,
	PiDribbbleLogo,
	PiGithubLogoDuotone,
	PiLinkedinLogoDuotone,
	PiPlus,
	PiXDuotone,
} from "react-icons/pi";
import Link from "next/link";
import FeaturedLink from "../ui/FeaturedLink";

const FeaturedLinks = () => {
	return (
		<section className="flex flex-col md:flex-row">
			<Link
				href="https://viditkhandelwal.com"
				className="relative border border-dashed p-2 text-xs uppercase flex transition-all duration-200 ease-in-out hover:border-indigo-600 hover:bg-indigo-50/20 group/portfolio_link flex-row justify-center items-center md:aspect-video font-light"
			>
				<span>Portfolio</span>
				<span className="*:text-black/20 *:group-hover/portfolio_link:text-indigo-600 *:transition-all *:duration-200 *:ease-in-out">
					<PiPlus className="absolute -top-[6.5px] -left-[6.5px]" />
					<PiPlus className="absolute -top-[6.5px] -right-[6.5px]" />
					<PiPlus className="absolute -bottom-[6.5px] -left-[6.5px]" />
					<PiPlus className="absolute -bottom-[6.5px] -right-[6.5px]" />
				</span>
				<PiArrowUpRightBold className="duration-200 transition-all ease-in-out group-hover/portfolio_link:text-indigo-600" />
			</Link>
			<div className="py-2 flex flex-row items-center gap-4 w-full bg-black bg-opacity-[2.5%] border-y border-black/10">
				<div className="border-y px-1 border-y-black/15 w-full">
					<div className="justify-center md:justify-start flex flex-row gap-[2px] w-full bg-white rounded-[7px] p-[2px]">
						<FeaturedLink
							icon={<PiGithubLogoDuotone />}
							label="Github"
							href="https://github.com/csvidit"
						/>
						<FeaturedLink
							icon={<PiLinkedinLogoDuotone />}
							label="LinkedIn"
							href="https://linkedin.com/in/viditkhandelwal"
						/>
						<FeaturedLink
							icon={<PiXDuotone />}
							label="Twitter/X"
							href="https://x.com/csvidit"
						/>
						<FeaturedLink
							icon={<PiXDuotone />}
							label="Layers"
							href="https://layers.to/vk"
						/>
						<FeaturedLink
							icon={<PiDribbbleLogo />}
							label="Dribbble"
							href="https://dribbble.com/viditkhandelwal"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedLinks;
