import React, { Component } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    buttonDisplay: "none"
  };

  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay
    };

    return (
      <div>
        <Navbar>
        <Navbar.Brand href="/"><div style={{width: '100%', textAlign: 'center', color: '#0066FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>WON</div></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <NavLink to="/mypage">
              <Button style={buttonStyle} variant="primary">
                회원정보 수정
              </Button>
            </NavLink> */}
            <NavLink to="/">
              <Button style={buttonStyle} variant="primary">
                글목록
              </Button>
            </NavLink>
            <NavLink to="/boardWrite">
              <Button style={buttonStyle} variant="primary">
                글쓰기
              </Button>
            </NavLink>
            <Button style={buttonStyle} onClick={this.logout} variant="primary">
              로그아웃
            </Button>
          </Navbar.Collapse>
        </Navbar>
        {/* <Image src="./img/main.png" fluid /> */}
      </div>
    );
  }
}

export default Header;
