import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, getContact } from "Operations/contactOperations";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { addContactError, addContactRequest, addContactSucces } from "redux/contactActions";

export const contactSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		filter: "",
		isLoading: Loading.remove(),
		error: null,
	},
	reducers: {
		// add(state, { payload }) {
		// 	state.items.push(payload);
		// },
		// remove(state, { payload }) {
		// 	state.items = state.items.filter(({ id }) => id !== payload);
		// },
		search(state, { payload }) {
			state.filter = payload;
		},
	},
	extraReducers: {
		[addContactRequest]: state => {
			state.isLoading = Loading.standard();
		},
		[addContactSucces]: (state, { payload }) => {
			state.isLoading = Loading.remove();
			state.items.push(payload);
		},
		[addContactError]: (state, { payload }) => {
			state.isLoading = Loading.remove();
			state.error = payload;
		},
		[getContact.pending]: state => {
			state.isLoading = Loading.standard();
		},
		[getContact.fulfilled]: (state, { payload }) => {
			state.isLoading = Loading.remove();
			state.items = payload;
		},
		[getContact.rejected]: (state, { payload }) => {
			state.isLoading = Loading.remove();
			state.error = payload;
		},
		[deleteContact.pending]: state => {
			state.isLoading = Loading.standard();
		},
		[deleteContact.fulfilled]: (state, { payload }) => {
			state.items = state.items.filter(({ id }) => id !== payload);
			Loading.remove();
		},
		[deleteContact.rejected]: (state, { payload }) => {
			state.isLoading = Loading.remove();
			state.error = payload;
		},
	},
});

export const contactReducer = contactSlice.reducer;

export const { add, remove, search } = contactSlice.actions;

// const persistConfig = {
// 	key: "contacts",
// 	storage,
// 	version: 1,
// 	blacklist: ["filter"],
// };

// export const contactReducer = persistReducer(persistConfig, contactSlice.reducer);
