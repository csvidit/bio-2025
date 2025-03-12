"use client";

import { useState, useEffect } from "react";

const Dimensions = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

    return <div suppressHydrationWarning>{`${dimensions.width} px × ${dimensions.height} px`}</div>
}

export default Dimensions;
