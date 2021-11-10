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
          <div>
            <div className="row">
              <div className="col-4">
                <Link to='/exercise/hookeffectfunction' >Side Effect in Function component</Link>
              </div>
              <div className="col-4">
                <Link to='/exercise/hookeffectclass' >Side Effect in class component</Link>
              </div>
              <div className="col-4">
                <Link to='/exercise/showmodal' >customized modal</Link>
              </div>
            </div>
            <div className="row">            
              <div className="col-4">
                <Link to='/exercise/showradiobutton' >customized RadioButton</Link>
              </div>
            </div>          
            <div className="row">            
              <div className="col-4">
                <Link to='/viewthree/cube' >Three.js test : Cube</Link>
              </div> 
              <div className="col-4">
                <Link to='/viewthree/shape' >Three.js test : Shape</Link>
              </div>
              <div className="col-4">
                <Link to='/viewthree/drawline' >Three.js test : Line</Link>
              </div>
              <div className="col-4">
                {/* <Link to='/viewthree/texture' >Three.js test : Texture</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}