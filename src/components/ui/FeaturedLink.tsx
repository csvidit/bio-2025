"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

const FeaturedLink = (props: {
	icon?: React.ReactNode;
	label?: string;
	href?: string;
}) => {
	const [hover, setHover] = useState(false);

	return (
		<Link
			href={props.href ?? "/"}
			target={props.href?.startsWith("https") ? "_blank" : "_self"}
			className="flex flex-row items-center justify-center text-xs uppercase font-light group/featured_link"
		>
			<motion.div
				onHoverStart={() => setHover(true)}
				onHoverEnd={() => setHover(false)}
				className="w-full h-full"
				layout
			>
				<motion.div
					layout
					className="transition-all duration-200 ease-in-out group-hover/featured_link:border-black/10 group-hover/featured_link:bg-black/10 border-[0.5px] border-black/10 p-[2px] bg-black/5 rounded-md"
					initial={{ boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
					animate={{
						boxShadow: hover
							? "0 2px 4px rgba(0, 0, 0, 0.05)"
							: "0 0 0 rgba(0, 0, 0, 0)",
					}}
					transition={{ duration: 0.2 }}
				>
					<motion.div
						layout
						className="flex flex-row items-center bg-white/90 rounded-sm p-2 overflow-hidden"
					>
						<AnimatePresence mode="popLayout">
							{hover && (
								<motion.div
									initial={{ opacity: 0, x: -4, scale: 0.9 }}
									animate={{ opacity: 1, x: 0, scale: 1 }}
									exit={{ opacity: 0, x: -4, scale: 0.9 }}
									transition={{
										duration: 0.15,
										ease: [0.25, 0.1, 0.25, 1.0],
										opacity: { duration: 0.1 },
									}}
									className="mr-1.5 flex items-center"
								>
									{props.icon}
								</motion.div>
							)}
						</AnimatePresence>

						<motion.div
							layout
							transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
							animate={{
								fontWeight: hover ? 400 : 300,
								letterSpacing: hover ? "0.02em" : "0",
							}}
						>
							{props.label}
						</motion.div>

						<AnimatePresence mode="popLayout">
							{hover && (
								<motion.div
									initial={{ opacity: 0, x: 4, scale: 0.9 }}
									animate={{ opacity: 1, x: 0, scale: 1 }}
									exit={{ opacity: 0, x: 4, scale: 0.9 }}
									transition={{
										duration: 0.15,
										ease: [0.25, 0.1, 0.25, 1.0],
										opacity: { duration: 0.1 },
										delay: 0.03,
									}}
									className="ml-1.5 flex items-center"
								>
									<motion.div>
										<PiArrowUpRight size={12} />
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</motion.div>
			</motion.div>
		</Link>
	);
};

export default FeaturedLink;
