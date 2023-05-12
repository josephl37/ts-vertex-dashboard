import { useAppSelector } from "../../redux/store";
import { convertData } from "../../utils";

import ERChart from "./ERChart";
import ERHeader from "./ERHeader";
import Spinner from "../../components/spinner";

const ExpectedRewards = () => {
  const response = useAppSelector((state) => state.data.data?.makers);
  const loading = useAppSelector((state) => state.data.loading);
  const data = response ? convertData(response, "expected_maker_reward") : null;

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <ERHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <ERChart data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpectedRewards;
