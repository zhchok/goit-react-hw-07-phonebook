import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

import { contactReducer } from "./contactSlice";

// const thunk = store => next => action => {
// 	if (typeof action === "function") {
// 		action(store.dispatch, store.getState);
// 		return;
// 	}
// 	next(action);
// };

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

// export const persistor = persistStore(store);
