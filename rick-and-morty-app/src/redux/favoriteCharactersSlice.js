// favoriteCharactersSlice.js

import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  characters: [], // Favori karakterlerin listesi
};

const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState,
  reducers: {
    addFavoriteCharacter(state, action) {
      // Yeni favori karakteri listeye ekle
      const newCharacter = action.payload;
      state.characters.push(newCharacter);
      // AsyncStorage kullanarak favori karakterleri sakla
      AsyncStorage.setItem('favoriteCharacters', JSON.stringify(state.characters));
    },
    removeFavoriteCharacter(state, action) {
      // Favori karakteri listeden kaldır
      const characterId = action.payload;
      state.characters = state.characters.filter(character => character.id !== characterId);
      // AsyncStorage kullanarak güncellenmiş favori karakter listesini sakla
      AsyncStorage.setItem('favoriteCharacters', JSON.stringify(state.characters));
    },
    loadFavoriteCharacters(state) {
      // AsyncStorage'den favori karakterleri yükle
      const savedCharacters = AsyncStorage.getItem('favoriteCharacters');
      if (savedCharacters) {
        state.characters = JSON.parse(savedCharacters);
      }
    },
  },
});

export const { addFavoriteCharacter, removeFavoriteCharacter, loadFavoriteCharacters } = favoriteCharactersSlice.actions;

export default favoriteCharactersSlice.reducer;
