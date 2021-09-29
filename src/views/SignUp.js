import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center" style={{ backgroundColor:'lightgray'}}>
      <div className="container" style={{ backgroundColor:'lightgray'}}>
        <div className="justify-content-center row"  style={{height:'100vh', alignItems:'center', display:'flex'}}>
          <div className="col-lg-4 col-xl-5 col-md-6 col-sm-7 col-12" style={{ backgroundColor:'white', borderRadius:'5px'}}>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{height:'100%'}}>
                          <i class="fas fa-user-tie" />
                        </div>
                      </div>
                      <input className="form-control" type="text" placeholder="Username" autoComplete="username" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{height:'100%'}}>
                          <i class="fas fa-envelope-square" />
                        </div>
                      </div>
                      <input className="form-control" type="text" placeholder="Email" autoComplete="username" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{height:'100%'}}>
                          <i class="fas fa-lock" />
                        </div>
                      </div>
                      <input className="form-control" type="password" placeholder="Password" autoComplete="current-password" />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{height:'100%'}}>
                          <i class="fas fa-lock" />
                        </div>
                      </div>
                      <input className="form-control" type="password" placeholder="Confirm Password" autoComplete="current-password" />
                    </div>
                    <div className="col-12">
                        <Link to='/signin' color="primary" className="btn btn-success col-12">Create Account</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
