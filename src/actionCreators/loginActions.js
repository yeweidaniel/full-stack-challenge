import { browserHistory } from 'react-router';

export function login(id, password, onSuccess, onFailure) {
    // Make API call to login
    if (id === '1' && password === 'secret') {
      if (onSuccess) {
        onSuccess();
      }

      return (dispatch) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          id
        });
        const newUrl = `/admin`;
        browserHistory.push(newUrl);
      }
    } else {
      if (onFailure) {
        onFailure("Login Failed");
      }
    }
  }

export function logout(logout) {
    return {
      type: "LOGOUT"
    };
  }
  