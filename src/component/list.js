import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            storeid :'',
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
        this._getData();
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
            'storeid' : this.state.storeid
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
                    <Link to ="/component/view" onClick={this._getStoreData}>
                        <div>
                            {/* <img src={el.image} width="200px" height="200px"></img> */}
                        </div>
                        <div>
                            <div> {el.name} </div>
                            <div> {el.address} </div>
                            <div> {el.sit} </div>
                        </div>
                    </Link>
                </div>
                )
            })
            : <div>데이터가 없습니다.</div>}
            </div>
        );
    }
}

export default List;