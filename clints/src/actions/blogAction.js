import axios from "axios";

import {

  NEW_BLOG_REQUEST,
  NEW_BLOG_SUCCESS,
  NEW_BLOG_FAIL,
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  ADMIN_BLOG_REQUEST,
  ADMIN_BLOG_SUCCESS,
  ADMIN_BLOG_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  NEW_COMMENT_REQUEST,
  NEW_COMMENT_SUCCESS,
  NEW_COMMENT_FAIL,
  ALL_COMMENT_REQUEST,
  ALL_COMMENT_SUCCESS,
  ALL_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/blogConstants";


// Create BLOG
export const createBLOG = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BLOG_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/admin/Blog/new`,  blogData, config);

    dispatch({ type: NEW_BLOG_SUCCESS,
      payload: data});
  } catch (error) {
    dispatch({
      type: NEW_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
 
};

 // get All Blogs
 export const getAllBlog = 
 
 (keyword = "", currentPage = 1,  category, ) =>
 async (dispatch) => {
   try {
     dispatch({ type: ALL_BLOG_REQUEST });

     let link = `/api/v1/Blog?keyword=${keyword}&page=${currentPage}`;

     if (category) {
       link = `/api/v1/Blog?keyword=${keyword}&page=${currentPage}&category=${category}`;
     }

     const { data } = await axios.get(link);
     dispatch({
       type:  ALL_BLOG_SUCCESS,
       payload: data,
      });
   } catch (error) {
     dispatch({
       type: ALL_BLOG_FAIL,
       payload: error.response.data.message,
     });
   }
 };
 
 export const getBlogsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/Blog/${id}`);
    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data.Blogs,
    });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// get Admin All Blogs
export const getAllAdminBlog = 
 
(keyword = "", currentPage = 1,  category, ) =>
async (dispatch) => {
  try {
    dispatch({ type: ADMIN_BLOG_REQUEST });

    let link = `/api/v1/admin/Blog?keyword=${keyword}&page=${currentPage}`;

    if (category) {
      link = `/api/v1/admin/Blog?keyword=${keyword}&page=${currentPage}&category=${category}`;
    }

    const { data } = await axios.get(link);
    dispatch({
      type:   ADMIN_BLOG_SUCCESS,
      payload: data,
     });
  } catch (error) {
    dispatch({
      type:  ADMIN_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Blog
export const updateBlog = (id, blogData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BLOG_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/Blog/${id}`,
      blogData,
      config
    );
    dispatch({
      type: UPDATE_BLOG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Delete blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/Blog/${id}`);

    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW COMMENT
export const newComment = (commentData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COMMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/comments`, commentData, config);

    dispatch({
      type: NEW_COMMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_COMMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Comment
export const getAllComment = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_COMMENT_REQUEST });

    const { data } = await axios.get(`/api/v1/comment?id=${id}`);

    dispatch({
      type: ALL_COMMENT_SUCCESS,
      payload: data.comments,
    });
  } catch (error) {
    dispatch({
      type: ALL_COMMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Comment
export const deleteComment = (commentId, BlogId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    const { data } = await axios.delete(
      `/api/v1/comment?id=${commentId}&BlogId=${BlogId}`
    );

    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
