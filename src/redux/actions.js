import { SEARCH_ROBOTS, UPDATE_ROBOTS, UPDATE_ROBOTS_FAILURE, UPDATE_ROBOTS_PENDING, UPDATE_ROBOTS_SUCCESS } from "./constants";

export const searchRobotsAction = (text) => {
  return {
    type: SEARCH_ROBOTS,
    payload: text,
  };
};
export const updateRobotsAction = () => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch({ type: UPDATE_ROBOTS_SUCCESS, payload: users });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_ROBOTS_FAILURE, payload: error });
      });
  };
};
