import React, { useState } from "react";

const Signup = () => {
  const [action, setAction] = useState("Sign UP")
  const handleClick = () => {
    setAction((prevAction) => (prevAction === "Login" ? "Sign Up" : "Login"));
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">{action}</h5>
              <form>
                <div className={action==="Login" ?"d-none":"mb-3"}>
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Choose a username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Choose a password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {action}
                </button>
              </form>
              
              <p className="mt-3 text-center">
               {action==="Sign UP"? "Already have an account?" :"Don't have an account?"} <a className="pe-auto" role="button" onClick={handleClick}>{action==="Login"? "Sign UP":"Login"}</a> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
