import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import VaccineReducer from "./store/reducers/VAccineReducer";
import { Provider } from "react-redux";
import { combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { PersistGate } from "redux-persist/integration/react";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  transforms: [
    encryptTransform({
      secretKey: "MySuperKey",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  vaccine: VaccineReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers());

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={
        <div>
          <p>Spinner...</p>
        </div>
      }
      persistor={persistor}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
