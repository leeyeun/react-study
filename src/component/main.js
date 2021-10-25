import React, { Component } from "react";
import './main.css';
import {Link} from "react-router-dom";

class Main extends Component {

    render(){
       
        return (
            <div>
                <nav className="header">
                    <div className="header_area">
                        <div className="header_left">
                            <a href="/">Logo</a>
                        </div>
                        <ul className="header_center">
                            <li><Link to="/">소개</Link></li>
                            <li><Link to="/">맛집리스트</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">공지사항</Link></li>
                            <li><Link to="/">마이페이지</Link></li>
                        </ul>
                        <ul className="header_right">
                            <li><Link to="/component/write">글쓰기</Link></li>
                            <li><Link to="/component/login">로그인</Link></li>
                            <li><Link to="/component/join">회원가입</Link></li> 
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Main;
