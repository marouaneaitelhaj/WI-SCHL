import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StudentRecord, TAbsence, Element } from "state/types";
import { getAbsences } from "./AbsencesActions";
import { set } from "react-hook-form";

type AbsenceState = {
    absences: TAbsence;
    status ?: string;
    selectedElement ?: Element;
}

const initialState: AbsenceState = {
    absences: {} as TAbsence,
    status: "idle",
    selectedElement: {} as Element
}

export const AbsencesSlice = createSlice({
    name: "Absences",
    initialState,
    reducers: {
        setAbsences: (state, action: PayloadAction<TAbsence>) => {
            state.absences = action.payload;
        },
        setSelectedElement: (state, action: PayloadAction<Element>) => {
            state.selectedElement = action.payload;
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

export const { setAbsences, setSelectedElement } = AbsencesSlice.actions;

export default AbsencesSlice.reducer;