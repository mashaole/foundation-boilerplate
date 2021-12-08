

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/IAmPresenting.png'

var style = {
    backgroundColor: "#fffff",
    textAlign: "center",
    left: "0",
    bottom: "0",
    height: "auto",
    fontSize: "90%",
    color: "black",
    padding: "30px",
    marginRight: "10px",
    marginTop: "1rem",
    position: "fixed",
    width: "100%"
}

var phantom = {
    display: 'grid',
    marginRight: '30px',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                © 2020 by Company
                <hr />
                <a href="https://www.iampresenting.com"><img src={logo} loading="lazy" alt="IAmPresenting" />
                </a>
            </div>
        </div >
    )
}

export default Footer;