import { Component } from "react";
import axios from "axios";

class View extends Component{
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
    componentDidMount() {
        //this._getData();
        this._getStoreData();
      }
      _getData = async () => {
        const res = await axios.get('/get/store');
        this.setState({ 
            storeList : res.data 
        })
      }
    
    _getStoreData = async () => {
        const res = await axios.get('/get/viewstore',{
        method : 'POST',
        data : { 
            'storeid' : 1
        },
            headers: new Headers()
        });
        this.setState({ 
            storeList : res.data 
        })
    }
    render(){
        const { storeList } = this.state;
        return(
            <div>
            {storeList.length !== 0 ? 
            storeList.map( (el, key) => {
                return(
                <div key={key}>
                        <div>
                        {/* <img src={el.image} width="200px" height="200px"></img> */}
                        </div>
                        <div>
                            <div> {el.storeid} </div>
                            <div> {el.name} </div>
                            <div> {el.address} </div>
                            <div> {el.number} </div>
                            <div> {el.time} </div>
                            <div> {el.sit} </div>
                        </div>
                </div>
                )
            })
            : <div>데이터가 없습니다.</div>}
            </div>
        );
    }
}
export default View;