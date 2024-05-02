import { createSlice } from "@reduxjs/toolkit";

type ProfileState = {
    editProfile: boolean;
    showProfile: boolean;
};
const initialState: ProfileState = {
    editProfile: false,
    showProfile: false,
};

export const ProfileSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        setEditProfile: (state, action) => {
            state.editProfile = action.payload;
        },
        setShowProfile: (state, action) => {
            state.showProfile = action.payload;
        }
    }
});

export const { setEditProfile, setShowProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
