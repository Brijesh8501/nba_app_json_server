import React from 'react';
import VideosList from '../../../widgets/videosList/videosList';

const VideosMain = () =>
{
    return (
        <VideosList
        type="card"
        loadmore={true}
        start={0}
        amount={5}
        />
    )
}
export default VideosMain;