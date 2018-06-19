import React from 'react';
import TeamInfo from "../../Elements/teamInfo";

const Header = (props)=>
{
    const teamInfo = (teamdata)=>
    {
        return(
            teamdata ? <TeamInfo team={teamdata}/>:null
        )
    }
    return(
        <div>
            {teamInfo(props.teamData)}
        </div>
    )
}
export default Header;