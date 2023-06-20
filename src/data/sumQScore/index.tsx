import { useAppSelector } from '../../redux/store';

import SUMQChart from './SUMQChart';
import SUMQHeader from './SUMQHeader';
import Spinner from '../../components/spinner';

const SumQScore = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <SUMQHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <SUMQChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default SumQScore;
