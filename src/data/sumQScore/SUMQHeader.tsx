import infoSvg from "../../public/information-circle.svg";

function SUMQHeader() {
  return (
    <div className="flex justify-between my-2 mx-2">
      <p className="text-gray-1 font-medium">Sum Q Min</p>
      <img
        src={infoSvg}
        alt="info"
        data-tooltip-id="chart-tooltip"
        data-tooltip-html="A representation of an MM’s<br />two-sided quoting performance<br />for each market in the current<br />epoch.
    "
      />
    </div>
  );
}

export default SUMQHeader;
