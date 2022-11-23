import { createStore } from "redux";

const initialState = {
  count: 0,
  step: 1,
  max: Infinity,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count:
          state.count + state.step > state.max
            ? state.max
            : state.count + state.step,
      };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "update_step":
      return { ...state, step: action.payload };
    case "update_maxValue":
      return { ...state, max: action.payload };
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
