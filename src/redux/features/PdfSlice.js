import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const pageChange = createAsyncThunk('pageChange', params => {
  return params;
});

const PdfSlice = createSlice({
  name: 'pdfSlice',
  initialState: {
    lastOpnedPage: null,
  },
  extraReducers: builder => {
    builder.addCase(pageChange.fulfilled, (state, action) => {
      let payload = action.payload;
      state.lastOpnedPage = payload.pageNo;
      payload.pdfRef?.current.setPage(payload.pageNo);
    });
  },
});

export default PdfSlice.reducer;
