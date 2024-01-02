import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const SetAppFirstLoad = createAsyncThunk('SetAppLoadFirst', params => {
  return params;
});

const AppLoadFirstSlice = createSlice({
  name: 'AppLoadFirst',
  initialState: {AppLoadFirstTime: true},
  extraReducers: builder => {
    builder.addCase(SetAppFirstLoad.fulfilled, (state, action) => {
      state.AppLoadFirstTime = action.payload;
    });
  },
});

export default AppLoadFirstSlice.reducer;
