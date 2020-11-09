import { types } from "../types/types";

const initialState = {
  clients: {
    loading: true,
    clientsArray:[]
  }
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.clientsLoaded:
      return {
        ...state,
        clients: {
          loading: false,
          clientsArray:[...action.payload]
        }
      };

    default:
      return state;
  }
};
