import * as FileSystem from "expo-file-system";
import { LOAD_POSTS, TOGGLE_BOOKED, DELETE_POST, CREATE_POST, UPDATE_POST } from "../types";
import { DB } from "../../db";

export const loadPosts = () => {
  return async (dispatch) => {
    const posts = await DB.getPosts();

    dispatch({
      type: LOAD_POSTS,
      payload: posts.reverse(),
    });
  };
};

export const toggleBooked = (post) => async (dispatch) => {
  await DB.checkFavoritePost(post);
  dispatch({
    type: TOGGLE_BOOKED,
    payload: post.id,
  });
};

export const deletePost = (id) => async (dispatch) => {
  await DB.deletePost(id);
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};

export const createPost = (post) => async (dispatch) => {
  const fileName = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch (e) {
    console.log("Error moving file: ", e);
  }

  const payload = { ...post, img: newPath };
  const id = await DB.createPost(payload);
  payload.id = id;
  dispatch({
    type: CREATE_POST,
    payload,
  });
};

export const updatePost = (post) => async (dispatch) => {
  const fileName = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch (e) {
    console.log("Error moving file: ", e);
  }

  const payload = { ...post, img: newPath };
  await DB.updatePost(payload)
  dispatch({
    type: UPDATE_POST,
    payload,
  });
};
