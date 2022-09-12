import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMode } from "../models/models";

interface IState extends IMode {
  updated: string;
}

const initialState: IState = {
  name: "",
  field: 0,
  updated: new Date().toISOString(),
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<IState>) => {
      const { name, field } = action.payload;

      state.name = name;
      state.field = field;
      state.updated = new Date().toISOString();
    },
  },
});

export const settingsActions = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;

interface Hovered {
  hovered: string[];
}

const initialHovered: Hovered = {
  hovered: [],
};

export const hoveredSlice = createSlice({
  name: "squares",
  initialState: initialHovered,
  reducers: {
    addHovered: (state, action: PayloadAction<string>) => {
      state.hovered.push(action.payload);
    },
    removeHovered: (state, action: PayloadAction<string>) => {
      state.hovered = state.hovered.filter((elem) => elem !== action.payload);
    },
    resetHovered: (state) => {
      state.hovered = [];
    },
  },
});

export const hoveredActions = hoveredSlice.actions;
export const hoveredReducer = hoveredSlice.reducer;
