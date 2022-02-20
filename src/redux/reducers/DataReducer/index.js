import {
  DONE_EPISODE,
  SET_EPISODE,
  DELETE_EPISODE,
  SET_EPISODES,
  WILL_WATCH_EPISODE,
} from "../../actions/ActionTypes";

const initialState = {
  episodes: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPISODES:
      return { ...state, episodes: [...action.payload] };
    case SET_EPISODE:
      return { ...state, episodes: [action.payload, ...state.episodes] };
    case DELETE_EPISODE:
      return {
        ...state,
        episodes: state.episodes.filter((item) => item.id !== action.payload),
      };
    case DONE_EPISODE:
      const indexDone = state.episodes.findIndex(item => item.id === action.payload.id);
      state.episodes.splice(indexDone, 1, action.payload);
      return{...state, episodes: [...state.episodes]}
    case WILL_WATCH_EPISODE:
      const indexWill = state.episodes.findIndex(item => item.id === action.payload.id);
      state.episodes.splice(indexWill, 1, action.payload);
      return{...state, episodes: [...state.episodes]}
    default:
      return state;
  }
};
