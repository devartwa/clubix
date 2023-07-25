import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import favoriteReducer from './favoriteReducer';

const persistInfo = {
  key: '@RMAppPersist',
  storage: AsyncStorage,
  whitelist: ['favorite'],
};

const rootReducer = combineReducers({
  favoriteReducer: persistReducer(persistInfo, favoriteReducer),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
