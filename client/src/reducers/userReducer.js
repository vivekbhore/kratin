import {
    PASSWORD_RESET_LINK_REQUEST,
    PASSWORD_RESET_LINK_SUCCESS,
    PASSWORD_RESET_LINK_FAIL,
    PASSWORD_RESET_LINK_RESET,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_RESET,
    RESET_PASSWORD_REQUEST,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL
} from '../constants/userConstant.js';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "REMOVE_USER":
      return {};
    default:
      return { ...state };
  }
};



export const passResetLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case PASSWORD_RESET_LINK_REQUEST:
      return { loading: true };
    case PASSWORD_RESET_LINK_SUCCESS:
      return { loading: false, message: action.payload };
    case PASSWORD_RESET_LINK_FAIL:
      return { loading: false, error: action.payload };
    case PASSWORD_RESET_LINK_RESET:
      return {};
    default:
      return state;
  }
};

export const passResetReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, message: action.payload };
    case RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    case RESET_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};


//profile


export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload, success: true };
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload, success: false };
        default:
            return state;
    }
};



export default userReducer;
