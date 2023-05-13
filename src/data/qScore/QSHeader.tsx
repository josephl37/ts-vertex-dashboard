import infoSvg from "../../public/information-circle.svg";

function QSHeader() {
  return (
    <div className="flex justify-between my-2 mx-2">
      <p className="text-gray-1 font-medium">Per-Minute Q Score</p>
      <img
        src={infoSvg}
        alt="info"
        data-tooltip-id="chart-tooltip"
        data-tooltip-html="A combination of Uptime, Sum Q Min,<br />and Maker Fee to evaluate MM's<br />contribution to market making. The<br />amount of $VRTX earned by MMs is<br />proportional to their relative Q-score.
    "
      />
    </div>
  );
}

export default QSHeader;
