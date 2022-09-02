import React, { useState } from 'react'
import axios from "axios"
import { Link, unstable_HistoryRouter } from 'react-router-dom'
import "./login.css"
const Login =({ setLoginUser}) => {
    const history = unstable_HistoryRouter()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
  return (
      <div className="app">
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={user.email} onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={user.password} onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={login}className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot password?
          </p>
          <div className="text-center" onClick={() => history.push("/register")}>
            Want to Get registered?{" "}
            <span className="link-primary">
              <Link to="/register">Sign UP </Link>
            
            </span>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login