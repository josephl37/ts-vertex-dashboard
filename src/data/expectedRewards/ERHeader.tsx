import infoSvg from "../../public/information-circle.svg";

function ERHeader() {
  return (
    <div className="flex justify-between my-2 mx-2">
      <p className="text-gray-1 font-medium">Expected Rewards per MM ($VRTX)</p>
      <img
        src={infoSvg}
        alt="info"
        data-tooltip-id="chart-tooltip"
        data-tooltip-html="The expected rewards ($VRTX)<br />per MM for each market in the<br />current epoch."
      />
    </div>
  );
}

export default ERHeader;
