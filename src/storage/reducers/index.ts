import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userReducer';

const persistInfo = {
  key: '@ClubixPersist',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  userReducer: persistReducer(persistInfo, userReducer),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
