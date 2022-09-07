import axios from "axios";

export const addContactApi = async contact => {
	const res = await axios.post("https://630b7be0f280658a59dc3a5b.mockapi.io/contacts", contact);
	return res.data;
};

export const getContactApi = async () => {
	const res = await axios.get("https://630b7be0f280658a59dc3a5b.mockapi.io/contacts");
	return res.data;
};

export const deleteContactApi = async contactId => {
	const res = await axios.delete(`https://630b7be0f280658a59dc3a5b.mockapi.io/contacts/${contactId}`, contactId);
	return res.data.id;
};
