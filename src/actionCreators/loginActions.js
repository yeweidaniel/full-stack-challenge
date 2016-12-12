export function login(id, password) {
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
  