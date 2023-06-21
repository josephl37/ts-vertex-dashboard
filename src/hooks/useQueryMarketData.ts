import { useState, useEffect } from 'react';
import axios from 'axios';

export function useQueryMarketData(network: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://prod.vertexprotocol-backend.com/symbols',
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
}
