// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from 'types/character';

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (arg) => {
        const { name } = arg;
        return {
          url: '/character',
          params: { name },
        };
      },
    }),
    getCharacter: builder.query({
      query: (arg) => {
        const { id } = arg;
        return {
          url: `/character/${id}`,
        };
      },
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCharactersQuery, useGetCharacterQuery } = apiSlice;
