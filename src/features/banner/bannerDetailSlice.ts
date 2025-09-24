import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { bannerDetailService } from '../../services/api';
import { BannerDetailData, BannerDetailState } from '../../types/bannerDetail';
import { RootState } from '../../store';

const initialState: BannerDetailState = {
  data: null,
  loading: false,
  error: null
};

export const fetchBannerDetailData = createAsyncThunk<
  BannerDetailData, 
  string, 
  { state: RootState }
>(
  'banner/fetchBannerDetailData',
  async (lang, { rejectWithValue }) => {
    try {
      const data = await bannerDetailService.getBannerDetailData(lang);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
  }
);

const bannerDetailSlice = createSlice({
  name: 'bannerDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDetailData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBannerDetailData.fulfilled, (state, action: PayloadAction<BannerDetailData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBannerDetailData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default bannerDetailSlice.reducer;
