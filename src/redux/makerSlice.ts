import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MakerState {
  data: {
    reward_coefficient: number;
    makers: {
      address: string;
      data: {
        timestamp: string;
        expected_maker_reward: string;
        maker_fee: string;
        maker_share: string;
        q_score: string;
        sum_q_min: string;
        uptime: string;
      }[];
    }[];
  } | null;
  loading: boolean;
  error: boolean;
}

const initialState: MakerState = {
  data: null,
  loading: false,
  error: false,
};

const main = 'https://prod.vertexprotocol-backend.com';
const test = 'https://test.vertexprotocol-backend.com';

export const fetchData = createAsyncThunk(
  'maker/fetchData',
  async ({
    market,
    interval,
    network,
    epoch,
  }: {
    market: number;
    interval: number;
    network: string;
    epoch: number;
  }) => {
    const base = network === 'main' ? main : test;

    const response = await axios.post(
      `${base}/indexer`,
      {
        maker_statistics: {
          epoch: epoch,
          product_id: market,
          interval: interval,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  },
);

const makerSlice = createSlice({
  name: 'maker',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default makerSlice.reducer;
