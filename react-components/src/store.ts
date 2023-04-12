import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice';
import { apiSlice } from './features/api/apiSlice';
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
