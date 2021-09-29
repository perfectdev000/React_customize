import React from "react";
import { Link } from "react-router-dom";
import CustomModal from './../components/modal/CustomModal'
class ShowModal extends React.Component {
  state = {
    show: false,
    textstring:'init'
  };
  handleCallback =(value)=>{
    this.setState({textstring:value});
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div style={{justifyContent:'center', display:'flex', alignItems:'center',height:'100vh'}}>
        <input type='text' size='30' value={this.state.textstring}/>
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {this.showModal(e);}}
        > Show Modal </button>
        <div><Link to='/home'>Go Home</Link></div>
        <CustomModal onClose={this.showModal} show={this.state.show} parentCallback={this.handleCallback}
          title="Testing Modal"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur."/>
        
      </div>
    );
  }
}

export default ShowModal;