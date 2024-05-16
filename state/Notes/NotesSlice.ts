import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StudentRecord, Tannonce } from "state/types";
import { getNotes } from "./NotesActions";

type AnnonceState = {
    notes: StudentRecord;
}

const initialState: AnnonceState = {
    notes: {} as StudentRecord
}

export const NotesSlice = createSlice({
    name: "Notes",
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<StudentRecord>) => {
            state.notes = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.notes = action.payload;
        }).addCase(getNotes.rejected, (state) => {
            // state.notes = [];
        }).addCase(getNotes.pending, (state) => {
            // state.notes = [];
        })
    }
});

export const { setNotes } = NotesSlice.actions;

export default NotesSlice.reducer;