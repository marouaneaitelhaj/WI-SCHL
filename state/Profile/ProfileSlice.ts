import { createSlice } from "@reduxjs/toolkit";

type ProfileState = {
  profileStatus: number;
  showProfile: boolean;
};
const initialState: ProfileState = {
  profileStatus: 0,
  showProfile: false,
};

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    setProfileStatus: (state, action: { payload: number }) => {
      state.profileStatus = action.payload;
    },
    setShowProfile: (state, action) => {
      state.showProfile = action.payload;
    },
  },
});

export const { setProfileStatus, setShowProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
