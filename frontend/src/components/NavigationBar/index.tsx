import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/brand.png';

import './NavigationBar.scoped.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light">
          <Navbar.Brand href="/">
            <img src={logo} alt="QuBE logo brand for navbar." />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="justify-content-end ml-auto">
              <NavLink exact to="/" className="nav-link">
                เริ่มต้นกับควอนตัม
              </NavLink>
              <NavLink to="/explore" className="nav-link">
                ผจญภัยในโลกควอนตัม
              </NavLink>
              <NavLink to="/playground" className="nav-link">
                สนามฝึกซ้อมควอนตัม
              </NavLink>
              <NavLink to="/challenge" className="nav-link">
                ท้าทายกับควอนตัม
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;
