import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import IGeneralState from 'store/reducers/general/types';

import generalSlice from './reducers/general';

const reducer = combineReducers({
  general: generalSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export const {
  actions: { resetGeneral, addJokeToFavorites },
} = generalSlice;

export const { dispatch } = store;

export default store;
