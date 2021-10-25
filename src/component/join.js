import React, { Component } from 'react';
import axios from 'axios';

class Join extends Component {
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

  _addData = async(e) => {
    const { userId, userPw, userName, userNumber, userEmail} = this.state;
    e.preventDefault();

    const res = await axios('/add/data', {
      method : 'POST',
      data : { 
        'userId' : userId,
        'userPw' : userPw,
        'userName' : userName,
        'userNumber' : userNumber,
        'userEmail' : userEmail
     },
      headers: new Headers()
    });

    if(res.data) {
      alert('회원가입이 완료되었습니다.');
      return window.location.reload();
    }
  }
  
  _idUpdate(e) {
    this.setState({ userId : e.target.value })
  }
  _pwUpdate(e) {
    this.setState({ userPw : e.target.value })
  }
  _nameUpdate(e) {
    this.setState({ userName : e.target.value })
  }
  _numberUpdate(e) {
    this.setState({ userNumber : e.target.value })
  }
  _emailUpdate(e) {
    this.setState({ userEmail : e.target.value })
  }

  render() {
    return(
      <div className='App'>
        <h4> join </h4>
        <form method='POST' onSubmit={this._addData}>
          <table>
            <tbody>
            <tr>
              <td>아이디 : </td>
              <td><input type='text' maxLength='10' placeholder='검색키워드(id)' onChange={(e) => this._idUpdate(e)} /></td>
            </tr>
            <tr>
              <td>비밀번호 : </td>
              <td><input type='text' maxLength='20' placeholder='검색키워드(pw)' onChange={(e) => this._pwUpdate(e)}/></td>
            </tr>
            <tr>
              <td>이름 : </td>
              <td><input type='text' maxLength='10' placeholder='검색키워드(name)' onChange={(e) => this._nameUpdate(e)} /></td>
            </tr>
            <tr>
              <td>전화번호 : </td>
              <td><input type='text' maxLength='20' placeholder='검색키워드(number)' onChange={(e) => this._numberUpdate(e)}/></td>
            </tr>
            <tr>
              <td>이메일 : </td>
              <td><input type='text' maxLength='20' placeholder='검색키워드(email)' onChange={(e) => this._emailUpdate(e)}/></td>
            </tr>
            <tr>
              <td><input type='submit' value='Add' /></td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default Join;

