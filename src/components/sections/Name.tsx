import { cn } from "@/utils/css-utils";

const Name = () => {
	return (
		<div className="w-1/2 md:w-2/3 *:border-t border-black/10 *:w-full *:px-1 ">
			<div className="w-full h-24" />
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
				<span className="text-black/40">
					fueled by web dev, AI, and a splash of mobile dev.
				</span>
			</div>
			<div className="h-10 w-full " />
		</div>
	);
};

export default Name;
