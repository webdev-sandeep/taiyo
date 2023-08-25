import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactRecord } from "../../utils/types";

const initialState: ContactRecord[] = [];

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    CREATE_CONTACT: (state, action: PayloadAction<ContactRecord>) => {
      state.push(action.payload);
    },

    UPDATE_CONTACT: (state, action: PayloadAction<ContactRecord>) => {
      const updatedContacts = state.map((contact: ContactRecord) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
      return (state = updatedContacts);
    },

    DELETE_CONTACT: (state, action: PayloadAction<string>) => {
      const updatedContacts = state.filter(
        (contact: ContactRecord) => contact.id !== action.payload
      );
      return (state = updatedContacts);
    },
  },
});

export const { CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } =
  contactSlice.actions;

export default contactSlice.reducer;
