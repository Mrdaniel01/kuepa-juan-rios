import {
  getClients,
  getClientById
} from "../helpers/fetch";

import { types } from "../types/types";

export const clientsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await getClients();
      const newArray = resp.slice(0, 100)
      dispatch(clientssLoaded(newArray));
    } catch (error) {
      console.log(error);
    }
  };
};

const clientssLoaded = (clients) => ({
  type: types.clientsLoaded,
  payload: clients,
});

export const clientStartLoadindById = (id) => {
  return async (dispatch) => {
    try {
      const resp = await getClientById(id);
      //TODO: revisar respuesta de API
      dispatch(newDetailLoaded(resp.yourNew));
    } catch (error) {
      console.log(error);
    }
  };
};

const newDetailLoaded = (newSelected) => ({
  type: types.clientDetailLoaded,
  payload: {
    loading: false,
    ...newSelected,
  },
});

