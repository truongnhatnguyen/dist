import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../api/productApi';

export const getProductAsync = createAsyncThunk(
  'get/products',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.get(params);
      console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);
const initialState = {
  isLoading: false,
  productList: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductAsync.pending]: (state) => {
      state.isLoading = true;
    },

    [getProductAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productList = action.payload.results;
    },

    [getProductAsync.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
