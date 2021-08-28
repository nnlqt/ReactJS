import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import  thunk  from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { chatsReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';
import { articlesReducer } from './articles/reducer';
import { middleware } from "./middlewares";
import { messagesReducer } from "./messages/reducer";

const persistConfig = {
    key: 'My-messanger',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export const persistor = persistStore(store);