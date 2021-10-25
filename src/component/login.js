import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId : '',
      userPw : '',
      userName : '',
      userNumber : '',
      userEmail : '',
      userList : [],
    }
  };
  _idUpdate(e) {
    this.setState({ userId : e.target.value });
    if(e.target.value){
      
    }
  }
  _pwUpdate(e) {
    this.setState({ userPw : e.target.value })
  }

  _getData = async () => {
    const res = await axios.get('/get/data');
    this.setState({ 
      userList : res.data
    })
  }
  componentDidMount(){
    this._getData();
  }
  
  _getMultiKeywordData = async() => {
    // const {userId, userPw} = this.state;
    // e.prevenDefault();

    const res = await axios('/get/multiKeywordData', {
      method : 'POST',
      data : { 
        'userId' : this.state.userId,// 둘다
        'userPw' : this.state.userPw
     },
      headers: new Headers()
    });
    this.setState({ 
      userList : res.data
    });
    
  }
  
  

  render() {
    const { userList } = this.state;
    return(
      <div className='App'>
        
        <h4> login </h4>
          <table>
            <tbody>
              <tr>
                <td>아이디 : </td>
                <td><input type='text' maxLength='10' placeholder='검색키워드(id)' onChange={(e) => this._idUpdate(e)}/></td>
              </tr>
              <tr>
                <td>비밀번호 : </td>
                <td><input type='password' maxLength='20' placeholder='검색키워드(pw)' onChange={(e) => this._pwUpdate(e)}/></td>
              </tr>
              <tr>
                <td><button onClick={this._getMultiKeywordData}>login</button></td>
                <td><button onClick={this._getData}>ListAll</button></td>
              </tr>
            </tbody>
          </table>
          {userList.length !== 0 ? 
          userList.map( (el, key) => {
            return(
              <div key={key}>
                <span> ID: {el.id} </span>/
                <span> USERID: {el.userId} </span>/
                <span> PW: {el.userPw} </span>/
                <span> NAME: {el.userName} </span>/
                <span> EMAIL: {el.userEmail} </span>
              </div>
            )
          })
          : <div>데이터가 없습니다.</div>}
      </div>
    )
  }
}

export default Login;

//임시