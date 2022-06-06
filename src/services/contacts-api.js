import axios from 'axios';

axios.defaults.baseURL = 'https://629e18843dda090f3c133edb.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get;
  return data;
}
