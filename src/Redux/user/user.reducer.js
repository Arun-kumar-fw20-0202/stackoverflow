import { ADD_USER, ADD_USER_REQUEST, getUser } from "./user.actionType";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case ADD_USER:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = false),
        user: [...state.user, payload],
      };
    case ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };
    //
    case getUser:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        user: [...state.user, payload],
      };

    default:
      return state;
  }
};
