import React from 'react';
import sidestyle from './sideNav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
const SideNavItems = () =>
{
const Items = [
    {
        type : sidestyle.option,
        icon:'home',
        text:'Home',
        link:'/'
    },
    {
        type : sidestyle.option,
        icon:'file-text-o',
        text:'News',
        link:'/news'
    },
    {
        type : sidestyle.option,
        icon:'play',
        text:'Videos',
        link:'/videos'
    },
    {
        type : sidestyle.option,
        icon:'sign-in',
        text:'Sign in',
        link:'/sign-in'
    },
    {
        type : sidestyle.option,
        icon:'sign-out',
        text:'Sign out',
        link:'/sign-out'
    }

]
    const showItems = () =>
    {
        return(
            Items.map((item,no) => {

                return (
                    <div className={item.type} key={no}>
                        <Link to={item.link}>
                            <FontAwesome name={item.icon}/>{item.text}
                        </Link>
                    </div>
                )

            })


        )
    }
    return(
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;