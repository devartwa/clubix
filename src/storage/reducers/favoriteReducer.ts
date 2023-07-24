import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// import {CharacterModel} from '@src/@types/screens/homeTypes';

type FavoriteState = {
  favorite: Array<any>;
  errorFavorite?: string | undefined;
};

const initialState: FavoriteState = {
  favorite: [],
  errorFavorite: undefined,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<any>) => {
      state.favorite = [...state.favorite, action.payload];
    },
    setClearFavorite: () => initialState,
  },
});

export const {setFavorite, setClearFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
