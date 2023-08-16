import axios from "axios";

const SERVER_URL = "https://contact-manager-app-api.iran.liara.run";
const authToken = "YOUR_AUTH_TOKEN";

// @desc Get All Contacts
// @route GET http://localhost:9000/contacts
export const getAllContacts = () => {
  const url = `${SERVER_URL}/contacts`;
  return axios.get(url);
};

// @desc Get Contact With Contact ID
// @route GET http://localhost:9000/contacts/:contactId
export const getContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.get(url, {
    headers: {
      Authorization: authToken,
    },
  });
};

// @desc  Get All Groups
// @route GET http://localhost:9000/groups
export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url, {
    headers: {
      Authorization: authToken,
    },
  });
};

// @desc  Get Group Name With Group ID
// @route GET http://localhost:9000/groups/:groupId
export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url, {
    headers: {
      Authorization: authToken,
    },
  });
};

// @desc  Create New Contact
// @route POST http://localhost:9000/contacts
export const createContact = (contact) => {
  const url = `${SERVER_URL}/contacts`;
  return axios.post(url, contact, {
    headers: {
      Authorization: authToken,
    },
  });
};

// @desc  Update Contact
// @route PUT http://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.put(url, contact, {
    headers: {
      Authorization: authToken,
    },
  });
};

// @desc  Delete Contact
// @route DELETE http://localhost:9000/contacts/:contactId
export const deleteContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.delete(url, {
    headers: {
      Authorization: authToken,
    },
  });
};
