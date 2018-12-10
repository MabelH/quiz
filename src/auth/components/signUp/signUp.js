import React from 'react'
import { Link } from 'react-router-dom'
import { AuthFormComponent } from '../authForm'

const SignUpComponent = ({ error, signUp }) => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-xs-12 col-md-6 col-lg-5">
        <div className="card">
          <div className="card-body p-5">
            <AuthFormComponent
              title="Sign Up"
              handleSubmit={({ username, password }) => signUp(username, password)}
              submitText="Sign Up"
            />
            <div className="text-center mt-2">
              <Link to="/sign-in"><small>Already signed up?</small></Link>&nbsp;&nbsp;
            </div>

            {error && <p className="text-danger">{error.message}</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SignUpComponent