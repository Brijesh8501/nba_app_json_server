import React from 'react';
import footerstyle from './footer.css';
import {Link} from 'react-router-dom';
import {current_year} from '../../config';

const Footer = () =>
{
    return (
        <div className={footerstyle.footer}>
            <Link to="/" className={footerstyle.logo}>
            <img alt="NBA_LOGO" src="/images/nba_logo.png"/>
            </Link>
            <span className={footerstyle.right}>@NBA {current_year} All rights reserved.</span>
        </div>
    )

}

export default Footer;