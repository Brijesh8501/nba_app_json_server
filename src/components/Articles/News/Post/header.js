import React from  'react';
import TeamInfo from '../../Elements/teamInfo';
import PostData from '../../Elements/postData';


const Header = (props) =>
{
    const teamInfo = (teamdata) =>
    {
        return teamdata ? (
            <TeamInfo team = {teamdata}/>
        ): null;
    }
    const postData = (date,author) =>
    {
        return (<PostData data = {{date,author}}/>)
    }
    return (
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date,props.author)}
        </div>
    )
}
export default Header;