import React from 'react';
import {Link} from 'react-router-dom'
import '../style/Navbar.scss';
function Navbar(props) {
    return (
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container d-flex" style={{gap: '0px 40px'}}>
  <Link to="/" className="KnowingDoctor_logo"><img className="" src="../images/Horizontal_1color.png" alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav me-lg-auto">
      <li>서비스 소개</li>
      <li>상담진 소개</li>
    </ul>
    <ul className="navbar-nav">
      <li className="navbar-btn-상담">상담 시작하기</li>
      <li className="navbar-btn-파트너">파트너 문의</li>
    </ul>
  </div>
  </div>
 
</nav>
    );
}

export default Navbar;