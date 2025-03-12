import DayTime from "../ui/DayTime";
import Dimensions from "../ui/Dimensions";

const RandomDetails = () => {
    return <div className="flex flex-col gap-4 w-1/2 md:w-1/3 *:text-right *:border-y border-black/10 *:w-full *:px-1 *:text-xs *:uppercase">
    <DayTime />
    <div>United States / Indianapolis</div>
    <div>Open to Work</div>
    <Dimensions/>
</div>
}

export default RandomDetails;
