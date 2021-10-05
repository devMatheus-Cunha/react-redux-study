/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  min: 1,
  max: 20,
};
export const ReducerNumber = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case "CHANGE_MIN_NUMBER":
      return {
        ...state,
        min: payload,
      };
    case "CHANGE_MAX_NUMBER":
      return {
        ...state,
        max: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
