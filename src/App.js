
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      sample1List : [],
    }
  };

  componentDidMount(){
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get('/get/data');
    this.setState({ 
      sample1List : res.data
    })
  }
  _getKeywordData = async() => {
    const res = await axios('/get/keywordData', {
      method : 'POST',
      data : { 
        'name' : this.state.name //이름 만
     },
      headers: new Headers()
    });
    this.setState({ 
      sample1List : res.data
    })
  }
  _getMultiKeywordData = async() => {
    const res = await axios('/get/multiKeywordData', {
      method : 'POST',
      data : { 
        'name' : this.state.name,// 둘다
        'email' : this.state.email
     },
      headers: new Headers()
    });
    this.setState({ 
      sample1List : res.data
    })
  }
  
  _nameUpdate(e) {
    this.setState({ name : e.target.value })
  }
  _emailUpdate(e) {
    this.setState({ email : e.target.value })
  }

  render() {
    const { sample1List } = this.state;
    return(
      <div className='App'>
        <h3>Hello, You are testing React!</h3>
        <h4> Sample1 List </h4>

          <input type='text' maxLength='10' placeholder='검색키워드(name)' onChange={(e) => this._nameUpdate(e)} />
          <input type='text' maxLength='20' placeholder='검색키워드(email)' onChange={(e) => this._emailUpdate(e)}/>
          <button onClick={this._getMultiKeywordData}>Search</button>
          <button onClick={this._getData}>ListAll</button>

          {sample1List.length !== 0 ? 
          sample1List.map( (el, key) => {
            return(
              <div key={key}>
                <span> ID: {el.id} </span>/
                <span> NAME: {el.name} </span>/
                <span> EMAIL: {el.email} </span>
              </div>
            )
          })
          : <div>데이터가 없습니다.</div>}
      </div>
    )
  }
}

export default App;

