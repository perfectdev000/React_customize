import React from "react";
import { Link } from "react-router-dom";
export default class HookEffectClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `${this.state.count} times`;
  }

  render() {
    return (
      <div style={{justifyContent:'center', alignItems:'center', display:'flex',}}>
        <div>
          <div><p>You clicked {this.state.count} times</p></div>
          <div><button onClick={() => this.setState({ count: this.state.count + 1 })}>++1</button></div>
          <div><button onClick={() => this.setState({ count: 0 })}>Reset</button></div>
          <div><Link to='/home'>Go Home</Link></div>
        </div>
      </div>
    );
  }
}