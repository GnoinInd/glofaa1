import axios from "axios";

import {

  NEW_JOB_REQUEST,
  NEW_JOB_SUCCESS,
  NEW_JOB_FAIL,
  ALL_JOB_REQUEST,
  ALL_JOB_SUCCESS,
  ALL_JOB_FAIL,
  ADMIN_JOB_REQUEST,
  ADMIN_JOB_SUCCESS,
  ADMIN_JOB_FAIL,
  JOB_DETAILS_REQUEST,
  JOB_DETAILS_SUCCESS,
  JOB_DETAILS_FAIL,
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAIL,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_FAIL,
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
} from "../constants/CaireerConstans";


// Create BLOG
export const createJobPost = (jobPostData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_JOB_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/admin/New/JobPost`,  jobPostData, config);

    dispatch({ type: NEW_JOB_SUCCESS,
      payload: data});
  } catch (error) {
    dispatch({
      type: NEW_JOB_FAIL,
      payload: error.response.data.message,
    });
  }
 
};

 // get All Jobs
 export const getAllJobsPost = 
 
 (keyword = "", currentPage = 1,  category, ) =>
 async (dispatch) => {
   try {
     dispatch({ type: ALL_JOB_REQUEST });

     let link = `/api/v1//Jobs?keyword=${keyword}&page=${currentPage}`;

     if (category) {
       link = `/api/v1//Jobs?keyword=${keyword}&page=${currentPage}&category=${category}`;
     }

     const { data } = await axios.get(link);
     dispatch({
       type:  ALL_JOB_SUCCESS,
       payload: data,
      });
   } catch (error) {
     dispatch({
       type: ALL_JOB_FAIL,
       payload: error.response.data.message,
     });
   }
 };
 
 export const getJobsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: JOB_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/Jobs/${id}`);
    dispatch({
      type: JOB_DETAILS_SUCCESS,
      payload: data.Jobs,
    });
  } catch (error) {
    dispatch({
      type: JOB_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// get All Job Post without pegination
export const getAllJobsWithoutPegination = ( ) =>
async (dispatch) => {
  try {
    dispatch({ type: ADMIN_JOB_REQUEST });
    const { data } = await axios.get('/api/v1/admin//AllJobs');
    dispatch({
      type:   ADMIN_JOB_SUCCESS,
      payload: data,
     });
  } catch (error) {
    dispatch({
      type:  ADMIN_JOB_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Job post
export const updateJob = (id, blogData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_JOB_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/Job/${id}`,
      blogData,
      config
    );
    dispatch({
      type: UPDATE_JOB_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_JOB_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Delete blog
export const deleteJobs = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_JOB_REQUEST });

    const { data } = await axios.delete(`/api/v1//admin/Job/${id}`);

    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
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


// For catogere 
