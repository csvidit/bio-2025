import Link from "next/link";

const FeaturedLink = (props: {
	icon?: React.ReactNode;
	label?: string;
	href?: string;
}) => {
	return (
		<Link
			href={props.href ?? "/"}
			target={props.href?.startsWith("https") ? "_blank" : "_self"}
			className="flex flex-row items-center justify-center text-xs uppercase font-light group/featured_link"
		>
			<div className="transition-all duration-200 ease-in-out group-hover/featured_link:border-black/10 group-hover/featured_link:bg-black/10 border-[0.5px] border-black/10 p-[2px] bg-black/5 rounded-md">
				<div className="flex flex-row items-center bg-white/90 rounded p-2">
					{/* {props.icon} */}
					<span>{props.label}</span>
				</div>
			</div>
		</Link>
	);
};

export default FeaturedLink;
