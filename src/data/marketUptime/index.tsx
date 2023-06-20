import { useAppSelector } from '../../redux/store';

import UPChart from './UPChart';
import UPHeader from './UPHeader';
import Spinner from '../../components/spinner';

const MarketUptime = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <UPHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <UPChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketUptime;
