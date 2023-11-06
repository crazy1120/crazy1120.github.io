import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

interface DeviceState {
  type: string;
}

interface RootState {
  device: DeviceState;
}

const initialState: DeviceState = {
  type: "laptop",
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { actions, reducer } = deviceSlice;

const rootReducer = combineReducers<RootState>({ device: deviceSlice.reducer });

const store = configureStore({ reducer: rootReducer });

export default store;
