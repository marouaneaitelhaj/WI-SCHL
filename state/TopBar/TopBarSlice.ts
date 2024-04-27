import { createSlice } from "@reduxjs/toolkit";

type TopBarState = {
  open: boolean;
  goBack : boolean;
};

const initialState: TopBarState = {
  open: false,
  goBack : false
};


export const TopBarSlice = createSlice({
  name: 'TopBar',
  initialState,
  reducers: {
    toggleTopBar: (state) => {
      state.open = !state.open;
    },
    closeTopBar: (state) => {
      state.open = false;
    },
    enableGoBack: (state) => {
      state.goBack = true;
    },
    disableGoBack: (state) => {
      state.goBack = false;
    }
  },
});

export const { toggleTopBar , closeTopBar, enableGoBack, disableGoBack } = TopBarSlice.actions;
export default TopBarSlice.reducer;