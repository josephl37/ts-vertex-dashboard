import { useAppSelector } from "../../redux/store";
import { convertData, formatTable } from "../../utils";

import ERChart from "./ERChart";
import ERHeader from "./ERHeader";
import Spinner from "../../components/spinner";
import ERTable from "./ERTable";

type HeaderProps = {
  interval: number;
};

const ExpectedRewards = ({ interval }: HeaderProps) => {
  const response = useAppSelector((state) => state.data.data?.makers);
  const loading = useAppSelector((state) => state.data.loading);
  const data = response ? convertData(response, "expected_maker_reward") : null;
  const lastData = data ? formatTable(data) : null;

  const colors = [
    "#4C289F",
    "#CDADEF",
    "#E4B50E",
    "#AF5067",
    "#CF96A4",
    "#53AC8C",
  ];

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <ERHeader />
      <div className="w-full h-144">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <ERChart interval={interval} colors={colors} data={data} />
            <ERTable lastData={lastData} colors={colors} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpectedRewards;
