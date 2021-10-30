import axios from '../config/axios'
import swal from 'sweetalert2'


import {
    PASSWORD_RESET_LINK_REQUEST,
    PASSWORD_RESET_LINK_FAIL,
    PASSWORD_RESET_LINK_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_UPDATE_FAIL
} from '../constants/userConstant.js';


export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}


export const setChangedPass = (info) => {
  return {
    type: "SET_MESSAGE",
    payload: info,
  };
};

export const removeUser = ()=>{
    return {
        type: 'REMOVE_USER'
    }
}

export const startSetUser = (login, redirect, redirectToPassChange) => {
  return (dispatch) => {
    axios.post("/users/login", login).then((response) => {
      if (response.data.hasOwnProperty("errors")) {
        swal.fire(`${response.data.errors}`, " ", "error");
      } else {
        swal.fire("Successfully logged in", "", "success");
        localStorage.setItem("authToken", response.data.token);
        console.log(response.data);
        console.log(response.data.user.isFirstVisit);
        const config = {
          headers: {
            "x-auth": localStorage.getItem("authToken"),
          },
        };

        if (
          response.data.user.isFirstVisit === true &&
          response.data.user.isSelfcreated === false
        ) {
            console.log('INSIDE TESTING');
            axios.post('/newstatuschange', { _id: response.data.user._id }, config).then((data) => {
                console.log(data);
                alert('work done');
            });
            dispatch(setUser(response.data.user));
            redirectToPassChange(response.data.user);
            document.location.reload();
        }
        else{
          dispatch(setUser(response.data.user));
          redirect(response.data.user);
          document.location.reload();
        }
      }
    });
  };
};

export const startAddUser = (register,redirect) => {
    return(dispatch => {
        axios.post('/users/register',register)
        .then(response => {
            if(response.data.hasOwnProperty('errors')) {
                swal.fire(`${response.data.errors}`," ","error")

            } else {
                swal.fire("Successfully Registered ","","success")
                // localStorage.setItem('authToken',response.data.token)
                redirect()
                dispatch(setUser(response.data.user))

            }
        })
    })

}

export const startRemoveUser = () =>{
    return(dispatch=>{
        axios.delete('/users/logout',{
            headers : {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.errors){
                alert(response.data.message)
            } else {
                localStorage.clear()
                dispatch(removeUser())
            }
        })
    })
}



export const updatePasswordAction = (userData) => {
  console.log(userData);
    return async (dispatch, getState) => {
      console.log(localStorage.getItem("authToken"));
      // const token = localStorage.getItem("authToken");
      const config = {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      };
      try {
        const { data } = await axios.post("/updatePassword", userData, config);
        dispatch(setChangedPass(data.msg));
        alert("password updated successfully")
      } catch (error) {
        console.log(error)
      }
    };
};


//password reset during login

export const getResetPasswordLink = (email) => async (dispatch) => {
  try {
    dispatch({
      type: PASSWORD_RESET_LINK_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/users/getResetPasswordLink`,
      { email },
      config
    );
    dispatch({
      type: PASSWORD_RESET_LINK_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_LINK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//password reset during login
export const resetPassword = (token, newPass, conPass) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    };

    const { data } = await axios.post(
      `/api/users/resetPassword/${token}`,
      { newPass, conPass },
      config
    );
    console.log(data);

   if(data.error)
   {
     dispatch({
         type: RESET_PASSWORD_FAIL,
         payload:data.error
     });
   }
   else{
      dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: data.status
      });
   }
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// profile section
export const updateProfile = (user, redirect) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const config = {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        };

        const { data } = await axios.post('/users/profile', user, config);
        redirect();
        console.log(data);

        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        dispatch(setUser(data));
        // /users/adprofile

        swal.fire('Profile updated successfully', '', 'success');

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

// profile section


