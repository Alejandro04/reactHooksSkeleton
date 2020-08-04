import axios from "axios";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user,dispatch,seterror) =>{ //login
  
  fetch("http://localhost:4000/api/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        const token = data.token;
        localStorage.setItem("jwt", token);
        seterror("")
        dispatch(setCurrentUser(data));
      } else {
        seterror(data.err.message)
        logoutUser(dispatch);
      }
    })
    .catch(err => {
      logoutUser(dispatch);
    });

};

export const setCurrentUser = data => {//si se loguea , setear datos del usuario
  return {
    type: SET_CURRENT_USER,
    payload: data
  };
};

export const logoutUser = (dispatch) => {//logout
  localStorage.removeItem("jwt");
  dispatch(setCurrentUser({}));
};


// Register user
export const registerUser = (user,dispatch,seterror) =>{ //login
  // Config headers
  const config = {
      headers: {
          "Content-type": "application/json"
      }
  }

  console.log("accion")

  const name = user.name
  const email = user.email
  const password = user.password

  // Request 
  const body = JSON.stringify({ name, email, password })
  axios.post(`http://localhost:4000/api/clients`, body, config)
      .then(res => dispatch(setCurrentUser(res.token)))
      .catch(err => {
        seterror("error")
      })
}
