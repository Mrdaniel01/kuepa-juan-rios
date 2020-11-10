import { types } from "../types/types";

const initialState = {
  clients: {
    loading: true,
    clientsArray:[]
  },
  clientDetail: {
    loading: true,
    clientData:{}
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

    case types.clientDetailLoaded:
      return {
        ...state,
        clientDetail: {
          loading: false,
          clientData: {...action.payload}
        }
      };

    default:
      return state;
  }
};
