import { useAppSelector } from "../../redux/store";

import RSChart from "./RSChart";
import RSHeader from "./RSHeader";
import Spinner from "../../components/spinner";

const RewardShare = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <RSHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <RSChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardShare;
