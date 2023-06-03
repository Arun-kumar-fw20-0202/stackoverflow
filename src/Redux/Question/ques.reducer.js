import {
  ADD_QUES,
  ADD_QUES_ERROR,
  ADD_QUES_REQUEST,
  GET_QUES,
  GET_QUES_ERROR,
  GET_QUES_REQUEST,
} from "./ques.actionType";

const initialState = {
  questions: [],
  isLoading: false,
  isError: false,
};

export const quesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_QUES_REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case ADD_QUES:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = false),
        questions: [...state.user, payload],
      };
    case ADD_QUES_ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case GET_QUES_REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case GET_QUES:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        questions: [...state.questions, payload],
      };
    case GET_QUES_ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };
    default:
      return state;
  }
};
