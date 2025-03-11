import { cn } from "@/utils/css-utils";

const MainContent = (props: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <main className={cn("w-11/12 md:w-8/12 lg:w-8/12 bg-white flex flex-col z-0 min-h-screen h-full ", props.className)}>{props.children}</main>;
};

export default MainContent;
