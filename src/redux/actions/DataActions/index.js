import { DELETE_EPISODE, SET_EPISODE, DONE_EPISODE, SET_EPISODES, WILL_WATCH_EPISODE} from "../ActionTypes";

export const setEpisodeAction = (payload) => ({
  type: SET_EPISODE,
  payload,
});

export const deleteEpisodeAction = (payload) => ({
  type: DELETE_EPISODE,
  payload,
});

export const doneEpisodeActino = (payload) => ({
  type: DONE_EPISODE,
  payload,
});

export const willWatchEpisode = (payload) => ({
  type: WILL_WATCH_EPISODE,  
  payload
})

export const setEpisodesAction = (payload) => ({
    type: SET_EPISODES,
    payload
})

export const getEpisodesThunk = () => async (dispatch) => {
    const response = JSON.parse(localStorage.getItem("episodes"));

    dispatch(setEpisodesAction(response));
};
