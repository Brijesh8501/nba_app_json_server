import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './sideNav_Items'


const SideNavigation = (props) =>
{
    return (
        <SideNav
        showNav = {props.showNav}
        onHideNav = {props.onHideNav}
        navStyle = {{
            background:'#242424',
            maxWidth:'220px',
            color:'white'
        }}
        >
   <SideNavItem/>
        </SideNav>
    )
}

export default SideNavigation;