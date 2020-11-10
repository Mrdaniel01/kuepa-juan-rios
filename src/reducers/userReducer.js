import { types } from "../types/types";

const initialState = {
  name:''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.userNameSaved:
      return {
          name: action.payload.name
      };

    default:
      return state;
  }
};
