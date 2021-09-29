import React from "react";
import { Link } from "react-router-dom";
import RadioButton from "../components/RadioButton/RadioButton";

export default class ShowRadioButton extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      show: false,
      selected:1
    };
  }
  handleCallback =(value)=>{
    this.setState({selected:value});
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div style={{justifyContent:'center', display:'flex', alignItems:'center',height:'100vh', width:'100%'}}>
        <div className="row" style={{padding:'2rem'}}>
          <div className="col-12">
            Selected item {this.state.selected}
          </div>
          <div className="col-12">
            <RadioButton item1="Apple" item2="Pear" item3="Tomato" selected={this.state.selected} parentCallback={this.handleCallback}
            />
          </div>
          <div className="col-12"><Link to='/home'>Go Home</Link></div>
        </div>
      </div>
    );
  }
}

