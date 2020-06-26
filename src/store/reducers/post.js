import {
  LOAD_POSTS,
  TOGGLE_BOOKED,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
} from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true,
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
        loading: false,
      };
    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post) => {
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
        allPosts: state.allPosts.filter((p) => p.id !== action.payload),
        bookedPosts: state.bookedPosts.filter((p) => p.id !== action.payload),
      };
    case CREATE_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      };
    case UPDATE_POST:
      const posts = state.allPosts;
      const oldPostIndex = posts.findIndex(
        (p) => p.id === action.payload.id
      );
      posts[oldPostIndex] = action.payload;
      return {
        ...state,
        allPosts: posts,
        bookedPosts: getBookedPosts(posts),
      };
    default:
      return state;
  }
};
