import { createAction } from "@reduxjs/toolkit";

export const postContactSuccess = createAction("postContactSuccess");
export const postContactRequest = createAction("postContactRequest");
export const postContactError = createAction("postContactError");

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

export const changeFilter = createAction("contacts/changeFilter");

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");
