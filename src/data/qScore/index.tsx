import { useAppSelector } from '../../redux/store';

import QSChart from './QSChart';
import QSHeader from './QSHeader';
import Spinner from '../../components/spinner';

const QScore = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <QSHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <QSChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default QScore;
