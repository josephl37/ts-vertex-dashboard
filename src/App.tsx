import { useEffect, useState } from 'react';
import { fetchData } from './redux/makerSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { useAppSelector } from './redux/store';
import { getCurrentEpoch } from './utils';

import Header from './layout/header';
import TopDB from './layout/top-db';
import BottomDB from './layout/bottom-db';
import Signature from './components/signature';
import Restricted from './components/restricted';

function App() {
  const currentEpoch = getCurrentEpoch();
  const [market, setMarket] = useState(4);
  const [interval, setInterval] = useState(3600);
  const [network, setNetwork] = useState('main');
  const [epoch, setEpoch] = useState(currentEpoch);
  const error = useAppSelector((state) => state.data.error);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData({ market, interval, network, epoch }));
  }, [dispatch, market, interval, network, epoch]);

  if (!error) {
    return (
      <div className="mt-10 lg:w-5/6 sm:w-full lg:mx-auto mx-4">
        <Header
          market={market}
          setMarket={setMarket}
          interval={interval}
          setInterval={setInterval}
          network={network}
          setNetwork={setNetwork}
          epoch={epoch}
          setEpoch={setEpoch}
        />
        <TopDB epoch={epoch} />
        <BottomDB />
        <Signature />
      </div>
    );
  } else {
    return (
      <div className="mx-10">
        <Restricted />
      </div>
    );
  }
}

export default App;
