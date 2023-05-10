import { useEffect, useState } from "react";
import { fetchData } from "./redux/makerSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";

import Header from "./components/header";
import TopDB from "./components/top-db";

function App() {
  const [market, setMarket] = useState(1);
  const [interval, setInterval] = useState(3600);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData({ market, interval }));
  }, [dispatch, market, interval]);

  return (
    <div className="mt-10 lg:w-5/6 sm:w-full lg:mx-auto mx-4">
      <Header
        market={market}
        setMarket={setMarket}
        interval={interval}
        setInterval={setInterval}
      />
      <TopDB />
    </div>
  );
}

export default App;
