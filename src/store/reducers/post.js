import { LOAD_POSTS, TOGGLE_BOOKED, DELETE_POST, CREATE_POST } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

const getBookedPosts = (allPosts) => {
  return allPosts.filter((post) => post.booked);
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: getBookedPosts(action.payload),
      };
    case TOGGLE_BOOKED:
      const allPosts = state.post.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: getBookedPosts(allPosts),
      };
    case DELETE_POST:
      return {
        ...state,
        allPosts: state.post.allPosts.filter((p) => p.id !== action.payload),
        bookedPosts: state.post.bookedPosts.filter(
          (p) => p.id !== action.payload
        ),
      };
    case CREATE_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      };
    default:
      return state;
  }
};
