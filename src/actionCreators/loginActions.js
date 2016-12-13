export function login(id, password, onSuccess, onFailure) {
    // Make API call to login
    if (id === 1 && password === 'secret') {
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onFailure) {
        onFailure("Login Failed");
      }
    }

    return {
      type: "LOGIN",
      id,
      password
    };
  }

export function logout(logout) {
    return {
      type: "LOGOUT"
    };
  }
  