import { Tooltip } from "react-tooltip";
import CurrentEpoch from "../data/currentEpoch/currentEpoch";
import RewardCoefficient from "../data/rewardCoefficient/rewardCoefficient";
import TotalMMs from "../data/totalMMs/totalMMs";

function TopDB() {
  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1 mt-8">
      <CurrentEpoch />
      <RewardCoefficient />
      <TotalMMs />
      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "rgb(42, 42, 47)",
          color: "#A2A2A6",
          opacity: 1,
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
        }}
        place="bottom"
      />
    </div>
  );
}

export default TopDB;
