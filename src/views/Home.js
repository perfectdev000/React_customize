import React from 'react';
import { Link } from 'react-router-dom';
import TheHeader from '../components/TheHeader/TheHeader';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password:'', errormsg:'' };
  }
  render() {
    return (
      <div >
        <TheHeader login={true}/>
        <div style={{justifyContent:'center', display:'flex', alignItems:'center', height:'100vh', backgroundColor:'lightgray'}}>
          <div className="row">
            <div className="col-12">
              Home Page
            </div>
            <div className="col-4">
              <Link to='/exercise/hookeffectfunction' >Side Effect in Function component</Link>
            </div>
            <div className="col-4">
              <Link to='/exercise/hookeffectclass' >Side Effect in class component</Link>
            </div>
            <div className="col-4">
              <Link to='/exercise/showmodal' >test my custom modal class component</Link>
            </div>
            <div className="col-4">
              <Link to='/exercise/showradiobutton' >test my custom RadioButton component</Link>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}