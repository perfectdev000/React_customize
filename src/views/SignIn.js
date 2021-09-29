import React from 'react'
export default class Login extends React.Component {
  
  goHome =()=>{
    alert("OK");
    this.props.history.push('/home')
  };
  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center" style={{ backgroundColor:'lightgray'}}>
        <div className="container" style={{ backgroundColor:'lightgray'}}>
          <div className="justify-content-center row"  style={{height:'100vh', alignItems:'center', display:'flex'}}>
            <div className="col-md-8" style={{ backgroundColor:'white', borderRadius:'5px'}}>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <form>
                      <h2>Login</h2>
                      <p className="text-muted">Sign In to your account</p>
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
                            <i class="fas fa-lock" />
                          </div>
                        </div>
                        <input className="form-control" type="password" placeholder="Password" autoComplete="current-password" />
                      </div>
                      <div className="row">
                        <div className="col-5">
                          <buton color="primary" className="px-4 btn btn-primary" onClick={this.goHome}>Login</buton>
                        </div>
                        <div className="col-7 text-right">
                          <buton color="link" className="px-0 btn btn-link">Forgot password?</buton>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="text-white bg-primary d-md-down-none col-md-6 col-sm-0 col-0"  style={{ borderTopRightRadius:'5px',borderBottomRightRadius:'5px'}}>
                  <div className="text-center card-body">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <a href="/signup">
                        <button color="primary" className="mt-3 btn btn-primary active" active tabIndex={-1}>Register Now!</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


