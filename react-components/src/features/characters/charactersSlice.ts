import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'types/character';

export interface CharactersState {
  selectedCharacterId: number | null;
  characters: Character[] | null;
  isModalOpen: boolean;
}

const initialState: CharactersState = {
  selectedCharacterId: null,
  characters: null,
  isModalOpen: false,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    selectCharacter: (state, action: PayloadAction<number>) => {
      state.selectedCharacterId = action.payload;
    },
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { selectCharacter, toggleModal } = charactersSlice.actions;

export default charactersSlice.reducer;
