import { useAppSelector } from '../../redux/store';

import AvgQMinChart from './avgQMinChart';
import AvgQMinHeader from './avgQMinHeader';
import Spinner from '../../components/spinner';

const AvgQMin = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <AvgQMinHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <AvgQMinChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default AvgQMin;
