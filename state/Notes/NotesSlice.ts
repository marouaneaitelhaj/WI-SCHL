import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StudentRecord, Tannonce } from "state/types";
import { getNotes } from "./NotesActions";

type AnnonceState = {
    notes: StudentRecord;
    status ?: string;
}

const initialState: AnnonceState = {
    notes: {} as StudentRecord,
    status: "idle"
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
            state.status = "success";
        }).addCase(getNotes.rejected, (state) => {
            // state.notes = [];
            state.status = "failed";
        }).addCase(getNotes.pending, (state) => {
            // state.notes = [];
            state.status = "loading";
        })
    }
});

export const { setNotes } = NotesSlice.actions;

export default NotesSlice.reducer;