import { useEffect, useState } from 'react';
import { fetchData } from './redux/makerSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { useAppSelector } from './redux/store';

import Header from './components/header';
import TopDB from './components/top-db';
import BottomDB from './components/bottom-db';
import Signature from './components/signature';
import Restricted from './components/restricted';

function App() {
  const [market, setMarket] = useState(1);
  const [interval, setInterval] = useState(3600);
  const [network, setNetwork] = useState('main');
  const error = useAppSelector((state) => state.data.error);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData({ market, interval, network }));
  }, [dispatch, market, interval, network]);

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
        />
        <TopDB />
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
