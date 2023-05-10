import { getCurrentEpoch } from "../../utils";
import infoSvg from "../../public/information-circle.svg";

function CurrentEpoch() {
  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <div className="flex justify-between mx-2 mt-2">
        <p className="text-gray-1 font-medium">Current Epoch</p>
        <img
          src={infoSvg}
          alt="info"
          data-tooltip-id="my-tooltip"
          data-tooltip-html="An epoch lasts for 28 days.<br />There are a total of 6 epochs<br />in the Vertex Trading Incentive<br/> Program (VTIP)."
        />
      </div>
      <div className="flex justify-center mt-4 mb-6">
        <p className="text-white text-6xl font-medium">{getCurrentEpoch()}</p>
      </div>
    </div>
  );
}

export default CurrentEpoch;
