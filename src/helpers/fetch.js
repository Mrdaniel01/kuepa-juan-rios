const baseUrl = process.env.REACT_APP_API_URL;


export const getClients = async () => {
  const url = `https://api.opendota.com/api/proPlayers`;
  const resp = await fetch(url);
  const clients = await resp.json();
  console.log(resp.body)
  console.log('fetch')
  return clients;
};

export const getClientById = async (id) => {
  const url = `${baseUrl}/player/${id}`;
  const resp = await fetch(url);
  const client = await resp.json();
  return client;
};