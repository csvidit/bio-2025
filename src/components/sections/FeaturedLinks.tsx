import {
	PiArrowUpRightBold,
	PiDribbbleLogoFill,
	PiGithubLogoFill,
	PiLinkedinLogoFill,
	PiPaletteFill,
	PiPlus,
	PiXLogoFill,
} from "react-icons/pi";
import Link from "next/link";
import FeaturedLink from "../ui/FeaturedLink";

const FeaturedLinks = () => {
	return (
		<section className="flex flex-col md:flex-row">
			<div className="md:w-2/3 py-2 flex flex-row items-center gap-4 w-full bg-black/5 bg-opacity-[2.5%] border-y border-black/10">
				<div className="border-y px-1 border-y-black/15 w-full">
					<div className="justify-center md:justify-start grid grid-cols-5 grid-flow-col gap-[2px] w-full bg-white rounded-[7px] p-[2px]">
						<FeaturedLink
							icon={<PiGithubLogoFill />}
							label="Github"
							href="https://github.com/csvidit"
						/>
						<FeaturedLink
							icon={<PiLinkedinLogoFill />}
							label="LinkedIn"
							href="https://linkedin.com/in/viditkhandelwal"
						/>
						<FeaturedLink
							icon={<PiXLogoFill />}
							label="X"
							href="https://x.com/csvidit"
						/>
						<FeaturedLink
							icon={<PiPaletteFill />}
							label="Layers"
							href="https://layers.to/vk"
						/>
						<FeaturedLink
							icon={<PiDribbbleLogoFill />}
							label="Dribbble"
							href="https://dribbble.com/viditkhandelwal"
						/>
					</div>
				</div>
			</div>
			<Link
				href="https://viditkhandelwal.com"
				className="bg-indigo-100 md:w-1/3 relative border py-2 hover:bg-indigo-200 border-dashed border-indigo-200 text-xs uppercase flex transition-all duration-200 ease-in-out hover:border-indigo-600  group/portfolio_link flex-row justify-center items-center font-light"
			>
				<div className="border-y w-full h-full px-1 border-indigo-300">
					<div className="w-full justify-center flex flex-row items-center h-full bg-white border-x border-indigo-200 group-hover/portfolio_link:border-indigo-300 transition-all duration-200 ease-in-out">
						<span>Full Portfolio</span>
						<PiArrowUpRightBold className="duration-200 transition-all ease-in-out group-hover/portfolio_link:text-indigo-600" />
					</div>
				</div>
				<span className="*:text-indigo-300 group-hover/portfolio_link:*:text-indigo-600 *:transition-all *:duration-200 *:ease-in-out">
					<PiPlus className="absolute -top-[6.5px] -left-[6.5px]" />
					<PiPlus className="absolute -top-[6.5px] -right-[6.5px]" />
					<PiPlus className="absolute -bottom-[6.5px] -left-[6.5px]" />
					<PiPlus className="absolute -bottom-[6.5px] -right-[6.5px]" />
				</span>
			</Link>
		</section>
	);
};

export default FeaturedLinks;
