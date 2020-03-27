import React from "react";
import Link from 'next/link';
import Router from 'next/router';
import {connect} from "react-redux";
import {coreLinks} from "../../../redux/selectors";
import {toggleSidebar} from "../../../redux/reducers/layout";

const Header = () => (
    <header>
        <nav className='nav-menu'>
            <div className='left-menu'>
                <button className='side-menu-control'><i className="fas fa-bars"></i></button>
            </div>
            <h1>Univers Labs Test</h1>
            <div className='profile-picture'>
                <i className="fas fa-user-circle"></i>
            </div>
        </nav>
    </header>
);

export default Header;