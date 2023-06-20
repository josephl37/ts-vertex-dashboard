import { useAppSelector } from '../../redux/store';

import MFChart from './MFChart';
import MFHeader from './MFHeader';
import Spinner from '../../components/spinner';

const MakerFee = () => {
  const loading = useAppSelector((state) => state.data.loading);

  return (
    <div className="bg-gray-3 border border-gray-2 rounded">
      <MFHeader />
      <div className="w-full h-96">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <MFChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default MakerFee;
