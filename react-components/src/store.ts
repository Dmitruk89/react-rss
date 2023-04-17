import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice';
import charactersReducer from './features/characters/charactersSlice';
import formReducer from './features/form/formSlice';
import toastReducer from './features/toast/toastSlice';
import { apiSlice } from './features/api/apiSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  characters: charactersReducer,
  form: formReducer,
  toast: toastReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: {
    search: searchReducer,
    characters: charactersReducer,
    form: formReducer,
    toast: toastReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiSlice.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
