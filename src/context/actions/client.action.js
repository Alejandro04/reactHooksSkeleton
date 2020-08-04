import axios from "axios";

// Register user
export const clientRegister = (user,dispatch,setError, setSucess) => {
  // Config headers
  const config = {
      headers: {
          "Content-type": "application/json"
      }
  }

  const name = user.name
  const description = user.description

  // Request 
  const body = JSON.stringify({ name, description })
  axios.post(`http://localhost:4000/api/clients`, body, config)
      .then(res => setSucess("registro exitoso"))
      .catch(err => {
        setError("error")
      })
}
