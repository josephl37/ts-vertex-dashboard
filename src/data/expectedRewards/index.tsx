import { useAppSelector } from '../../redux/store';

import ERChart from './ERChart';
import ERHeader from './ERHeader';
import Spinner from '../../components/spinner';

const ExpectedRewards = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <ERHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <ERChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpectedRewards;
