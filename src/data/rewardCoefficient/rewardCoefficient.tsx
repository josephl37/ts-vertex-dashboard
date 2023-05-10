import Spinner from "../../components/spinner";
import infoSvg from "../../public/information-circle.svg";
import { useAppSelector } from "../../redux/store";

function RewardCoefficient() {
  const data = useAppSelector((state) => state.data);
  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <div className="flex justify-between mx-2 mt-2">
        <p className="text-gray-1 font-medium">Reward Coefficient</p>
        <img
          src={infoSvg}
          alt="info"
          data-tooltip-id="my-tooltip"
          data-tooltip-html="A dynamic, relative measure of how<br />much $VRTX is earned for each market.<br />A value of 1.00 is average, the more tokens<br />allocated to a market, the higher reward<br />coefficient it has.
        "
        />
      </div>
      <div className="flex justify-center mt-4 mb-6">
        {data.loading ? (
          <Spinner />
        ) : (
          <p className="text-white text-6xl font-medium">
            {data?.data?.reward_coefficient?.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default RewardCoefficient;
