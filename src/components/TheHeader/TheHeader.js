import React from 'react';
import { Link } from 'react-router-dom';
import './TheHeader.css';
export default class TheHeader extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      login: props.login,
    };
  }  
  render(){
    return (
      <div className="row page-header" >
        <div className="left-in-header col-sm-6 col-12">
          {
            this.state.login
            ?
            <div style={{justifyContent:'start', display:'flex', padding:'0.5rem 1rem'}} className="row">                        
              <Link to='/home' className="btn btn-light col btn-header"> Home </Link>
              <Link to='#' className="btn btn-light col btn-header"> Dashboard </Link>            
            </div>         
            :
            <div style={{justifyContent:'start', display:'flex', padding:'0.5rem 1rem'}} className="row"></div>         
          }          
        </div>
        <div className="right-in-header col-sm-6 col-12">
          {
            this.state.login
            ?
            <div style={{justifyContent:'end', display:'flex', padding:'0.5rem 1rem'}}>            
              <Link to='#' className="btn btn-light btn-header"><i class="far fa-bell"></i></Link>
              <Link to='#' className="btn btn-light btn-header"><i class="far fa-comments"></i></Link>
              <Link to='#' className="btn btn-light btn-header"><i class="far fa-envelope-open"></i></Link>            
            </div>
            :
            <div style={{justifyContent:'end', display:'flex', padding:'0.5rem 1rem'}}>
              <Link to='/signin' className="btn btn-light  btn-header"> Sign In </Link>
              <Link to='/signup' className="btn btn-light btn-header"> Sign Up </Link>
            </div>
          }          
        </div>
      </div>       
    )
  }
}