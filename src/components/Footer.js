import React from 'react';

const footLogo = require('../assets/img/footer-logo.png');

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-inner">
                <p>Powered by COLOGO. &copy; {(new Date().getFullYear())} Copyrights Reserved</p>
                <p><img alt="Footer Logo" src={footLogo} /></p>
            </div>
        </footer>
    )
}

export default Footer;