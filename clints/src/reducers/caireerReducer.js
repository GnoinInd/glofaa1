import {

    NEW_JOB_REQUEST,
    NEW_JOB_SUCCESS,
    NEW_JOB_FAIL,
    ALL_JOB_REQUEST,
    ALL_JOB_SUCCESS,
    ALL_JOB_FAIL,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL,
    ADMIN_JOB_REQUEST,
    ADMIN_JOB_SUCCESS,
    ADMIN_JOB_FAIL,
    UPDATE_JOB_REQUEST,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAIL,
    UPDATE_JOB_RESET,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    DELETE_JOB_RESET,
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
} from "../constants/CaireerConstans";


export const newJobeducer = (state = { Job: {} }, action) => {
    switch (action.type) {
        case NEW_JOB_REQUEST:
            return {

                loading: true,
            };
        case NEW_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                Jobs: action.payload,
            };

        case NEW_JOB_FAIL:
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

export const alljobsReducer = (state = { Jobs: [] }, action) => {
    switch (action.type) {
        case ALL_JOB_REQUEST:
        case ADMIN_JOB_REQUEST:
            return {
                loading: true,
                Jobs: [],

            };
        case ALL_JOB_SUCCESS:
        case ADMIN_JOB_SUCCESS:
            return {
                loading: false,
                Jobs: action.payload.Jobs,
                resultPerPage: action.payload.resultPerPage,
                JobsCount: action.payload.JobsCount,
                filteredJobsCount: action.payload.filteredJobsCount,

            };

        case ALL_JOB_FAIL:
        case ADMIN_JOB_FAIL:
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

export const jobsDetailsReducer = (state = { Jobs: {} }, action) => {
    switch (action.type) {
        case JOB_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case JOB_DETAILS_SUCCESS:
            return {
                loading: false,
                Jobs: action.payload,
            };
        case JOB_DETAILS_FAIL:
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
export const JobsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_JOB_REQUEST:
        case UPDATE_JOB_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case UPDATE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };

        case DELETE_JOB_FAIL:
        case UPDATE_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_JOB_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case UPDATE_JOB_RESET:
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