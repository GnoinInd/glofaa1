import axios from "axios";

import {

  NEW_CATOGERY_REQUEST,
  NEW_CATOGERY_SUCCESS,
  NEW_CATOGERY_FAIL,
  ALL_CATOGERY_REQUEST,
  ALL_CATOGERY_SUCCESS,
  ALL_CATOGERY_FAIL,
  ADMIN_CATOGERY_REQUEST,
  ADMIN_CATOGERY_SUCCESS,
  ADMIN_CATOGERY_FAIL,
  UPDATE_CATOGERY_REQUEST,
  UPDATE_CATOGERY_SUCCESS,
  UPDATE_CATOGERY_FAIL,
  DELETE_CATOGERY_REQUEST,
  DELETE_CATOGERY_SUCCESS,
  DELETE_CATOGERY_FAIL,

  CLEAR_ERRORS,
} from "../constants/CaireerConstans";


// Create catogery
export const createCATOGERY = (Data) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CATOGERY_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/admin/New/Categery`, Data, config);

    dispatch({ type: NEW_CATOGERY_SUCCESS,
      payload: data});
  } catch (error) {
    dispatch({
      type: NEW_CATOGERY_FAIL,
      payload: error.response.data.message,
    });
  }
 
};

 // get All CATOGERYs
 export const getAllCATOGERY = 
 
 (keyword = "", currentPage = 1,  category, ) =>
 async (dispatch) => {
   try {
     dispatch({ type: ALL_CATOGERY_REQUEST });

     let link = `/api/v1/admin/Categery?keyword=${keyword}&page=${currentPage}`;

     if (category) {
       link = `/api/v1/admin/Categery?keyword=${keyword}&page=${currentPage}&category=${category}`;
     }

     const { data } = await axios.get(link);
     dispatch({
       type:  ALL_CATOGERY_SUCCESS,
       payload: data,
      });
   } catch (error) {
     dispatch({
       type: ALL_CATOGERY_FAIL,
       payload: error.response.data.message,
     });
   }
 };
 



// get All CATOGERY Post without pegination
export const getAllCATOGERYWithoutPegination = ( ) =>
async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CATOGERY_REQUEST });
    const { data } = await axios.get('/api/v1/Categery');
    dispatch({
      type:   ADMIN_CATOGERY_SUCCESS,
      payload: data,
     });
  } catch (error) {
    dispatch({
      type:  ADMIN_CATOGERY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update CATOGERY post
export const updateCATOGERY = (id, Data) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CATOGERY_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/Categery/${id}`,
      Data,
      config
    );
    dispatch({
      type: UPDATE_CATOGERY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CATOGERY_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Delete blog
export const deleteCATOGERY = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATOGERY_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/Categery/${id}`);

    dispatch({
      type: DELETE_CATOGERY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATOGERY_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


// For catogere 
