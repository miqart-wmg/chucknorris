import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import generalInitState from './initState';
import { IJoke } from "./types";

export const fetchJokes = createAsyncThunk(
    'fetchJokes',
    async (userId, thunkAPI) => {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      const json = await response.json();
      return json;
    }
);

const generalSlice = createSlice({
  name: 'general',
  initialState: generalInitState,
  reducers: {
    addJokeToFavorites: (state, { payload }: PayloadAction<IJoke>) => {
      if(state.favoriteJokes.length < 10) {
          state.favoriteJokes.push(payload);
      } else {
          state.favoriteJokes.shift();
          state.favoriteJokes.push(payload);
      }
    },
    resetGeneral: () => ({ ...generalInitState }),
  },
  extraReducers: {
      [fetchJokes.fulfilled.type]: (state, { payload }: PayloadAction<IJoke>) => {
          state.currentJoke = payload;
      }
  }
});

export default generalSlice;
