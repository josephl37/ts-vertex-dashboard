import infoSvg from "../../public/information-circle.svg";

function MFHeader() {
  return (
    <div className="flex justify-between my-2 mx-2">
      <p className="text-gray-1 font-medium">Maker Fee for Market (%)</p>
      <img
        src={infoSvg}
        alt="info"
        data-tooltip-id="chart-tooltip"
        data-tooltip-html="Shows the maker fee (%) of each MM<br />for each market in the current epoch."
      />
    </div>
  );
}

export default MFHeader;
