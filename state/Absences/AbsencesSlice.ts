import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StudentRecord, TAbsence } from "state/types";
import { getAbsences } from "./AbsencesActions";

type AbsenceState = {
    absences: TAbsence;
    status ?: string;
}

const initialState: AbsenceState = {
    absences: {} as TAbsence,
    status: "idle"
}

export const AbsencesSlice = createSlice({
    name: "Absences",
    initialState,
    reducers: {
        setAbsences: (state, action: PayloadAction<TAbsence>) => {
            state.absences = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAbsences.fulfilled, (state, action) => {
            state.absences = action.payload;
            state.status = "success";
        }).addCase(getAbsences.rejected, (state) => {
            // state.absences = [];
            state.status = "failed";
        }).addCase(getAbsences.pending, (state) => {
            // state.absences = [];
            state.status = "loading";
        })
    }
});

export const { setAbsences } = AbsencesSlice.actions;

export default AbsencesSlice.reducer;