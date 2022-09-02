import React, { useState } from 'react'
import { Link, unstable_HistoryRouter } from 'react-router-dom'
import "./register.css"
import axios from "axios"
const Register = () => {
  const history = unstable_HistoryRouter()

  const [ user, setUser] = useState({
      name: "",
      email:"",
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const register = () => {
      const { name, email, password, reEnterPassword } = user
      if( name && email && password && (password === reEnterPassword)){
          axios.post("http://localhost:9002/register", user)
          .then( res => {
              alert(res.data.message)
              history.push("/login")
          })
      } else {
          alert("invlid input")
      }
      
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              <Link to="/login">Sign IN </Link>
            
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={user.name} 
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit"  onClick={register}className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default Register