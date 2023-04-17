import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
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

export const { useGetCharactersQuery, useGetCharacterQuery } = apiSlice;
