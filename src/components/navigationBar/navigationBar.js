import React from 'react';
import MainLogo from "../../assets/images/logos/main-logo.svg";
import { Link } from "react-router-dom";
import constants from '../../constants';

function NavigationBar() {

    return (
        <>
            <nav className="navbar navbar-expand-md">
                <Link className="navbar-brand" to={constants.routes.HOMEPAGE}><img src={MainLogo} alt="main logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarsExampleDefault">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={constants.routes.BECOME_A_SELLER}>Become a  Seller</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={constants.routes.ABOUT_US}>About us</Link>
                    </li>
                    </ul>
                    <div className="row my-2 my-lg-0">
                    <div className="col-12 col-sm-12 col-md-6 row justify-content-between">
                        <Link className="nav-link col-4" to={constants.routes.BECOME_A_SELLER}>B</Link>
                        <Link className="nav-link col-4" to={constants.routes.ABOUT_US}>A</Link>
                        <Link className="nav-link col-4" to={constants.routes.ABOUT_US}>S</Link>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 row justify-content-between flex-nowrap">
                        <Link className="nav-link col-4 button" to={constants.routes.BECOME_A_SELLER}>Sign in</Link>
                        <Link className="nav-link col-4 button" to={constants.routes.ABOUT_US}>Join free</Link>
                        <a className="nav-link col-4 button">العربية</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;