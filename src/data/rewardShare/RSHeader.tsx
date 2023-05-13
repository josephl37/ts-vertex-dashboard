import infoSvg from "../../public/information-circle.svg";

function RSHeader() {
  return (
    <div className="flex justify-between my-2 mx-2">
      <p className="text-gray-1 font-medium">Reward Share for Market (%)</p>
      <img
        src={infoSvg}
        alt="info"
        data-tooltip-id="chart-tooltip"
        data-tooltip-html="Shows the relative Q-scores for each<br />MM for each market in the current epoch.<br />Each datapoint compares the cumulative<br />scores up to that point (from the start<br />of the epoch)."
      />
    </div>
  );
}

export default RSHeader;
