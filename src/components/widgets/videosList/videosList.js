import React , { Component} from 'react';
import styles from './videoslist.css';
import axios from 'axios';
import {Url} from '../../../config';
import Buttons from '../Buttons/buttons';
import VideoListTemplate from './videolisttemplate';

class VideosList extends Component
{
    state = {
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }
    renderTitle = (title) =>
    {
        return title ? <h3><strong>NBA</strong> Videos</h3> : null


    }
    request = (start,end)=>
    {
        if(this.state.teams.length < 1)
        {
            axios.get(`${Url}/teams`)
                .then( response =>
            {
                return ( this.setState ({
                    teams:response.data
                })
        )
            })
        }

        axios.get(`${Url}/videos?_start=${start}&_end=${end}`)
            .then( response =>
            {
                this.setState(
                    {
                        videos:[...this.state.videos,...response.data],
                        end:end
                    }
                )
            })
    }
    renderVideos = () =>
    {
        let template = null;
        switch(this.props.type)
        {
            case 'card' :
                template = <VideoListTemplate data={this.state.videos}
                teams={this.state.teams}
                />
                break;
            default :
                template = null;
        }
        return template
    }
    loadMore = () =>
    {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end);

    }
    renderButton = () =>
    {
        return (this.props.loadmore ?
                <Buttons
                    type="loadmore"
                    loadMore = {() =>
                    {
                        this.loadMore()
                    }}
                    cta = "Load More Videos"
                    />
                :
                <Buttons
            type="linkTo"
            linkTo = '/videos'
        cta = "More Videos"
    />
        )
    }
    componentWillMount()
    {
        this.request(this.state.start,this.state.end)
    }
    render()
    {
        return (
        <div className={styles.videoList_wrapper}>
            {this.renderTitle(this.props.title)}
            {this.renderVideos()}
            {this.renderButton()}

        </div>
        )
    }
}
export default VideosList;