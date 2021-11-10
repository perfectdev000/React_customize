import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './views/Home'
import HookEffectFunction from './exercise/HookEffectFunction'
import HookEffectClass from './exercise/HookEffectClass'
import CustomModal from './exercise/ShowModal'
import ShowRadioButton from './exercise/ShowRadioButton';
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import Cube from './viewThree/Cube'
import Shape from './viewThree/Shape'
import DrawLine from './viewThree/DrawLine'

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/exercise/hookeffectfunction" component={HookEffectFunction}/>
      <Route path="/exercise/hookeffectclass" component={HookEffectClass}/>
      <Route path="/exercise/showmodal" component={CustomModal}/>
      <Route path="/exercise/showradiobutton" component={ShowRadioButton}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/viewthree/cube" component={Cube}/>
      <Route path="/viewthree/shape" component={Shape}/>
      <Route path="/viewthree/drawline" component={DrawLine}/>
      <Redirect from="/" to="/app" />      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
