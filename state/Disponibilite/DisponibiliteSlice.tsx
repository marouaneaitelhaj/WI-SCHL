import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DisponibiliteRecord } from "@state/types";
import { getDisponibilites } from "./DisponibiliteActions";

type DisponibiliteState = {
    data : DisponibiliteRecord;
    status : "idle" | "loading" | "succeeded" | "failed";
}

const initialState : DisponibiliteState = {
    data : {} as DisponibiliteRecord,
    status : "idle"
}

const DisponibiliteSlice = createSlice({
    name : "Disponibilite",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getDisponibilites.pending, (state) => {
            state.status = "loading";
        })
        .addCase(
            getDisponibilites.fulfilled,
            (state, action: { payload: DisponibiliteRecord }) => {
                state.status = "succeeded";
                state.data = action.payload;
            }
        )
        .addCase(
            getDisponibilites.rejected,
            (state, action: PayloadAction<any>) => {
                state.status = "failed";
            }
        )
    }
})

export default DisponibiliteSlice.reducer;
