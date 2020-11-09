import { types } from "../types/types";

const initialState = {
  clients: []
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.clientStartLoad:
      return {
        ...state,
        clientStartLoad: true,
      };

    default:
      return state;
  }
};