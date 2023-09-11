import {

  NEW_BLOG_REQUEST,
  NEW_BLOG_SUCCESS,
  NEW_BLOG_FAIL,
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  ADMIN_BLOG_REQUEST,
  ADMIN_BLOG_SUCCESS,
  ADMIN_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_RESET,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_RESET,
  NEW_COMMENT_REQUEST,
  NEW_COMMENT_SUCCESS,
  NEW_COMMENT_FAIL,
  NEW_COMMENT_RESET,
  ALL_COMMENT_REQUEST,
  ALL_COMMENT_SUCCESS,
  ALL_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_RESET,
  CLEAR_ERRORS,
} from "../constants/blogConstants";


export const newBLOGReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case NEW_BLOG_REQUEST:
      return {

        loading: true,
      };
    case NEW_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        blogs: action.payload,
      };

    case NEW_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const allBlogsReducer = (state = { Blogs: [] }, action) => {
  switch (action.type) {
    case ALL_BLOG_REQUEST:
    case ADMIN_BLOG_REQUEST:
      return {
        loading: true,
        Blogs: [],

      };
    case ALL_BLOG_SUCCESS:
    case ADMIN_BLOG_SUCCESS:
      return {
        loading: false,
        Blogs: action.payload.Blogs,
        resultPerPage: action.payload.resultPerPage,
        BlogsCount: action.payload.BlogsCount,
        filteredBlogsCount: action.payload.filteredBlogsCount,

      };

    case ALL_BLOG_FAIL:
    case ADMIN_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const blogDetailsReducer = (state = { Blog: {} }, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case BLOG_DETAILS_SUCCESS:
      return {
        loading: false,
        Blog: action.payload,
      };
    case BLOG_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// update And Delete Reducer
export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BLOG_REQUEST:
    case UPDATE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_BLOG_FAIL:
    case UPDATE_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BLOG_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_BLOG_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
// Comment reducer
export const newCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_COMMENT_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_COMMENT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productCommentReducer = (state = { Comments: [] }, action) => {
  switch (action.type) {
    case ALL_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_COMMENT_SUCCESS:
      return {
        loading: false,
        Comments: action.payload,
      };
    case ALL_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const commentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COMMENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};