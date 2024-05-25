import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import styles from './styles';
export const mapContacts = (contact) => {
    const { name, picture, phone, cell, email } = contact;
    return {
        id: v4(),
        name: name.first + '' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },

    reducers: {
        fetchContactsSuccess: (state, action) => {
            state.contacts = action.payload;
        },
    },
});
export const { fetchContactsSuccess } = contactsSlice.actions;
const Store = configureStore({
    reducer: contactsSlice.reducer,
});

export default Store;