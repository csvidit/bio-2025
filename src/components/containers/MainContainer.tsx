import { cn } from "@/utils/css-utils";
import { gantari } from "@/utils/fonts";

const MainContainer = (props: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <body className={cn("flex text-black flex-col justify-center items-center w-screen max-w-screen min-h-screen h-full bg-transparent", props.className, gantari.className)}>{props.children}</body>;
};

export default MainContainer;
