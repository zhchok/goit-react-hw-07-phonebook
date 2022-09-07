import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactError, addContactRequest, addContactSucces } from "redux/contactActions";

import { addContactApi, deleteContactApi, getContactApi } from "../utils/mockApi";

export const addContact = contact => dispatch => {
	dispatch(addContactRequest());

	addContactApi(contact)
		.then(newContact => dispatch(addContactSucces(newContact)))
		.catch(err => dispatch(addContactError(err.message)));
};

export const getContact = createAsyncThunk("contact/get", async (_, thunkApi) => {
	try {
		const contact = await getContactApi();
		return contact;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});

export const deleteContact = createAsyncThunk("contact/delete", async (contactId, thunkApi) => {
	try {
		const id = await deleteContactApi(contactId);
		return id;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});
