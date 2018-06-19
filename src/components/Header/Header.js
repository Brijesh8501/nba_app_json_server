import React from 'react';
import headerstyle from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sideNav';

const Header = (props) =>
{
  const Logo = () =>
  {
      return(
      <Link to="/" className={headerstyle.logo}>
          <img src="/images/nba_logo.png" alt="NBA_LOGO"/>
      </Link>
      )
  }
  const navBars = () =>
  {

      return (
          <div className={headerstyle.bars}>
           <FontAwesome name='bars' className={headerstyle.fontsbars} onClick = {props.onOpenNav}/>
          </div>

      )
  }
    return (
        <header className={headerstyle.header}>
        <SideNavigation {...props}/>
        <div className={headerstyle.headerOpt}>
            {navBars()}
            {Logo()}

        </div>
        </header>
            )

}

export default Header;