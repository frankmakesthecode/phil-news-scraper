import React from 'react';
import { connect } from 'react-redux';
import { FaGlobeAsia } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import rapplerIcon from '../../public/icons/rappler.png';
import inqIcon from '../../public/icons/inquirer.png';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-nav">
        <li className="logo">
          <a href="/home" className="nav-link">
            <FaRegNewspaper className="react-icons" />
            <span className="link-text">pna</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/rappler" className="nav-link">
            <img src={rapplerIcon} className="logo-icons" />
            <span className="link-text">Rappler</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={inqIcon} className="logo-icons" />
            <span className="link-text">Inquirer</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default connect(null)(Navbar);
