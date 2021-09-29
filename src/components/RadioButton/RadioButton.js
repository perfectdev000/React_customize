import React from 'react'
const btnstyle1 = {  
  fontSize:'2rem',
  border: '1px solid #8bcb3d',
  backgroundColor:'#8bcb3d',
  color:'white',
  padding: '5px',
  borderRadius:'3px',
};
const btnstyle2 = {  
  fontSize:'2rem',
  border: '1px solid lightgray',
  backgroundColor:'white',
  color:'#8bcb3d',
  padding: '5px',
  borderRadius:'3px',
};
class RadioButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title1:props.item1,
      title2:props.item2,
      title3:props.item3,
      selected:props.selected,
    };
  }    
  selectButton1 = () => { 
    this.setState({selected:1}); 
    this.props.parentCallback(1);  
  }
  selectButton2 = () => { 
    this.setState({selected:2});
    this.props.parentCallback(2);
  }
  selectButton3 = () => { 
    this.setState({selected:3});
    this.props.parentCallback(3);
  }
  render() {
    const {selected, title1, title2, title3}=this.state;
    return (
      <div className="col-12">
        <div className="row">
          <button className="col-4" style={selected===1?btnstyle1:btnstyle2} onClick={this.selectButton1}>
            {title1}
          </button>
          <button className="col-4" style={selected===2?btnstyle1:btnstyle2} onClick={this.selectButton2}>
            {title2}
          </button>
          <button className="col-4" style={selected===3?btnstyle1:btnstyle2} onClick={this.selectButton3}>
            {title3}
          </button>
        </div>
      </div>
    );
  }
}
  
export default RadioButton;