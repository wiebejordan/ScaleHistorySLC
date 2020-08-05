import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './authReducer';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


 export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

