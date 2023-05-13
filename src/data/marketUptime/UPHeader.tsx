import infoSvg from "../../public/information-circle.svg";

function UPHeader() {
  return (
    <div className="flex justify-between my-2 mx-2">
      <p className="text-gray-1 font-medium">Uptime for Market (%)</p>
      <img
        src={infoSvg}
        alt="info"
        data-tooltip-id="chart-tooltip"
        data-tooltip-html="The uptime of each MM for each<br />market in the current epoch."
      />
    </div>
  );
}

export default UPHeader;
