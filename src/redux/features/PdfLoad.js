import {createSlice} from '@reduxjs/toolkit';

const PdfLoadSlice = createSlice({
  name: 'pdfLoad',
  initialState: {
    lastOpenedPage: 1,
  },
  reducers: {
    getLastOpenedPage(state, action) {
      state.lastOpenedPage;
    },
  },
});

export default PdfLoadSlice.reducer;
