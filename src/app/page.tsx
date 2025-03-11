import MainContent from "@/components/containers/MainContent";
import FeaturedLinks from "@/components/sections/FeaturedLinks";
import Intro from "@/components/sections/Intro";

export default function Home() {
	return <MainContent>
    <Intro />
    <FeaturedLinks />
  </MainContent>;
}
