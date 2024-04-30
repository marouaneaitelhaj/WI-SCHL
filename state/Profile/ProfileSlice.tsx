import { createSlice } from "@reduxjs/toolkit";

type ProfileState = {
    editProfile: boolean;
};
const initialState: ProfileState = {
    editProfile: false
};

export const ProfileSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        setEditProfile: (state, action) => {
            state.editProfile = action.payload;
        }
    }
});

export const { setEditProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
