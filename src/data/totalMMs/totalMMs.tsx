import infoSvg from "../../public/information-circle.svg";
import { useAppSelector } from "../../redux/store";
import Spinner from "../../components/spinner";

function TotalMMs() {
  const data = useAppSelector((state) => state.data);
  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <div className="flex justify-between mx-2 mt-2">
        <p className="text-gray-1 font-medium">Total MMs</p>
        <img
          src={infoSvg}
          alt="info"
          data-tooltip-id="my-tooltip"
          data-tooltip-html="The total number of market makers<br />for each market in the current epoch."
        />
      </div>
      <div className="flex justify-center mt-4 mb-6">
        {data.loading ? (
          <Spinner />
        ) : (
          <p className="text-white text-6xl font-medium">
            {data?.data?.makers?.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default TotalMMs;
