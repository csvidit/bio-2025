import Details from "./RandomDetails";
import Name from "./Name";

const Intro = () => {

	return (
		<section className="flex flex-row gap-0 divide-x divide-x-black/10">
			<Name />
			<Details />
		</section>
	);
};

export default Intro;
