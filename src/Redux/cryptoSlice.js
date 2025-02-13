import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchAllCoins = createAsyncThunk(
  "crypto/fetchAllCoins",
  async (page, { getState }) => {
    const cachedData = getState().crypto.allCoins[page];
    if (cachedData && cachedData.length > 0) {
      return cachedData;
    }
    const { data } = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page,
      },
    });
    return data;
  },
);

export const fetchCoinsDetails = createAsyncThunk(
  "crypto/fetchCoinsDetails",
  async (id) => {
    const { data } = await axios.get(`${API_URL}/coins/${id}`);
    return data;
  },
);

export const fetchCoinsHistory = createAsyncThunk(
  "crypto/fetchCoinsHistory",
  async ({ id, days }) => {
    const { data } = await axios.get(`${API_URL}/coins/${id}/market_chart`, {
      params: {
        vs_currency: "usd",
        days,
      },
    });
    return data;
  },
);

const initialState = {
  allCoins: [],
  selectedCoin: null,
  coinHistory: [],
  status: "idle",
  error: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoins.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCoins = action.payload;
      })
      .addCase(fetchAllCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCoinsDetails.fulfilled, (state, action) => {
        state.selectedCoin = action.payload;
      })
      .addCase(fetchCoinsDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoinsDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCoinsHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoinsHistory.fulfilled, (state, action) => {
        state.coinHistory = action.payload;
      })
      .addCase(fetchCoinsHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
