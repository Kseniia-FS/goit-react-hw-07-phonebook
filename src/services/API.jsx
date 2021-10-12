import axios from "axios";

const BASE_URL = "http://localhost:3000/contacts";

export async function getAllContacts() {
  const { data } = await axios.get(BASE_URL);

  return data;
}

export async function addContact(id, name, number) {
  const { data } = await axios.post(BASE_URL, {
    id,
    name,
    number,
  });

  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);

  return data;
}
