import React from 'react';
import styles from '../videoslist.css';
import VideoListTemplate from "../videolisttemplate";

const VideosRelated = (props)=>
{
console.log(props);
    return (<div className={styles.relatedWrapper}>
        <VideoListTemplate
        data={props.data}
        teams={props.teams}
        />
    </div>)
}
export default VideosRelated;