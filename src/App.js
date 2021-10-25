import './App.css';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Join from './component/join';
import Login from './component/login';
import Main from './component/main';
import { BrowserRouter } from 'react-router-dom';
import Write from './component/write';
import List from './component/list';
import View from './component/view';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeList:'',
    }
  };

  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <Main />
          <Route exact={true} path={"/component/write"}  component={Write}/>
          <Route exact={true} path={"/component/join"}  component={Join}/>
          <Route exact={true} path={"/component/login"}  component={Login}/>
          <Route exact={true} path={"/"}  component={List}/>
          <Route exact={true} path={"/component/view"}  component={View}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

