import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { bannerService } from '../../services/api';
import { BannerData, BannerState } from '../../types/banner';
import { RootState } from '../../store';

// Initial State
const initialState: BannerState = {
  data: null,
  loading: false,
  error: null
};

// Async Thunk
export const fetchBannerData = createAsyncThunk<
  BannerData, 
  string, 
  { state: RootState }
>(
  'banner/fetchBannerData',
  async (lang, { rejectWithValue }) => {
    try {
      const data = await bannerService.getBannerData(lang);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
  }
);

// Slice
const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBannerData.fulfilled, (state, action: PayloadAction<BannerData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBannerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default bannerSlice.reducer;
