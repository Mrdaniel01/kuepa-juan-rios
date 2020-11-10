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

export const clientStartLoadingById = (id) => {
  return async (dispatch) => {
    try {
      const resp = await getClientById(id);
      console.log(resp)
      dispatch(clientDetailLoaded(resp));
    } catch (error) {
      console.log(error);
    }
  };
};

const clientDetailLoaded = (clientSelected) => ({
  type: types.clientDetailLoaded,
  payload: {
    ...clientSelected,
  },
});

