import { cn } from "@/utils/css-utils";
// import { instrumentSerif } from "@/utils/fonts";
import DayTime from "../ui/DayTime";

const Intro = () => {
	return (
		<section className="flex flex-row gap-0 divide-x divide-x-black/10">
			<div className="w-1/2 md:w-2/3 *:border-t border-black/10 *:w-full *:px-1 ">
				<h1
					className={cn(
						"border-t text-xl md:text-2xl lg:text-4xl font-light tracking-tight",
					)}
				>
					VIDIT KHANDELWAL
				</h1>
				<div className="h-10 w-full " />
				<div className="text-sm md:text-md lg:text-base font-light uppercase">
					<span className="">full stack engineer</span>{" "}
					<span>fueled by web dev, AI, and a splash of mobile dev.</span>
				</div>
				<div className="h-10 w-full " />
			</div>
			<div className="w-1/2 md:w-1/3 *:text-right *:border-b border-black/10 *:w-full *:px-1 *:text-xs *:uppercase">
				<DayTime />
				<div className="h-4 w-full " />
				<div>United States / Indianapolis</div>
				<div className="h-4 w-full " />
				<div>Open to Work</div>
			</div>
		</section>
	);
};

export default Intro;
