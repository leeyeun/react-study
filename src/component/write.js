import { Component } from "react";
import axios from "axios";

class Write extends Component{
    constructor(props) {
        super(props);
        this.state = {
            storeid: '',
            name : '',
            address : '',
            number : '',
            time : '',
            sit : '',
            image : '',
            storeList : [],
        }
    };

    
    _nameUpdate(e) {
        this.setState({ name : e.target.value })
    }
    _addressUpdate(e) {
        this.setState({ address : e.target.value })
    }
    _numberUpdate(e) {
        this.setState({ number : e.target.value })
    }
    _timeUpdate(e) {
        this.setState({ time : e.target.value })
    }
    _sitUpdate(e) {
        this.setState({ sit : e.target.value })
    }
    _imageUpdate(e) {
        this.setState({ image: e.target.value })
    }
    
    _addStore = async(e) => {
        const { storeid, name, address, number, time, sit, image} = this.state;
        e.preventDefault();
    
        const res = await axios('/add/store', {
          method : 'POST',
          data : { 
            'storeid' : storeid,
            'name' : name,
            'address' : address,
            'number' : number,
            'time' : time,
            'sit' : sit,
            'image' : image
         },
          headers: new Headers()
        });
    
        if(res.data) {
          alert('등록이 완료되었습니다.');
          return window.location.reload();
        }
      }

    render(){
        return(
            <div>
                <div>
                    <h3>store</h3>
                    <form method='POST' onSubmit={this._addStore}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>가게명 : </td>
                                    <td><input type="text" placeholder="가게명" onChange={(e)=>this._nameUpdate(e)}></input></td>
                                </tr>
                                <tr>
                                    <td>주소 : </td>
                                    <td><input type="text" placeholder="주소" onChange={(e)=>this._addressUpdate(e)}></input></td>
                                </tr>
                                <tr>
                                    <td>번호 : </td>
                                    <td><input type="text" placeholder="번호" onChange={(e)=>this._numberUpdate(e)}></input></td>
                                </tr>
                                <tr>
                                    <td>영업시간 : </td>
                                    <td><input type="text" placeholder="영업시간" onChange={(e)=>this._timeUpdate(e)}></input></td>
                                </tr>
                                <tr>
                                    <td>총 좌석 : </td>
                                    <td><input type="text" placeholder="총 좌석" onChange={(e)=>this._sitUpdate(e)}></input></td>
                                </tr>
                                <tr>
                                    <td>사진 추가 :</td>
                                    <td><input type="file" placeholder="이미지" file={this.state.image} onChange={(e)=>this._imageUpdate(e)}></input></td>
                                </tr>
                                <tr>
                                    <td><input type="submit" value="등록하기"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}
export default Write;