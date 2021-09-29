import React from "react";
import PropTypes from "prop-types";
const modalbackstyle={
  top:'0', bottom:'0', left:'0', right:'0', position:'absolute', zIndex:'1000', backgroundColor:'rgba(0, 0, 0, 0.6)',
  justifyContent:'center', display:'flex', alignItems:'center',
}
const modalstyle={
  width:'50%',
  backgroundColor:'lightgray',
  color:'black',
  borderRadius:'5px',
  boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  transition:'3s ease-out',
  transform: 'scale(1.0)',
  opacity:'1',
  visibility:'visible',
  zIndex:'1001',
}
const headerstyle={  
  backgroundColor:'green',
  color:'white',
  fontSize:'1.3rem',
}
const contentstyle={  
  fontSize:'1rem',
  padding:'1rem'
}
const footerstyle={margin:'0', padding:'0.2rem 0.3rem 0.3rem 0.3rem'}
const buttonstyle={
  fontSize:'1rem',
  color:'white',  
  backgroundColor:'green',
  borderRadius:'3px',
}
export default class CustomModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // value: this.props.value,
    };
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  onOK = () =>{
    this.props.parentCallback("OK button was pressed");
    this.onClose();
  };
  onCancel = () =>{
    this.props.parentCallback("Cancel button was pressed");
    this.onClose();
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={modalbackstyle}>
        <div style={modalstyle}>
          <div class="modal-header" style={headerstyle}>{this.props.title}</div>
          <div class="modal-content" style={contentstyle}>
            {this.props.content}
          </div>
          <div class="modal-footer row" style={footerstyle}>
            <button class="toggle-button col-3" onClick={this.onOK} style={buttonstyle}>OK</button>
            <button class="toggle-button col-3" onClick={this.onCancel} style={buttonstyle}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
CustomModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};