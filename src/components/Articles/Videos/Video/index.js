import React, {Component} from 'react';
import axios from 'axios';
import {Url} from '../../../../config';
import styles from '../../article.css';
import Header from './header';
import VideosRelated from '../../../widgets/videosList/videosRelated/videosRelated';
class VideoArticle extends Component
{
    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }
    componentWillMount()
    {
        axios.get(`${Url}/videos?id=${this.props.match.params.id}`)
            .then( response =>
            {
                let article = response.data[0];
                axios.get(`${Url}/teams?id=${article.team}`)
                    .then( response =>
                    {
                        this.setState({
                                article: article,
                                team: response.data
                            })
                        this.getRelated()
                    })
            })
    }
    getRelated = ()=>
    {
        axios.get(`${Url}/teams`)
            .then(response =>
            {
                let teams = response.data;
                axios.get(`${Url}/videos?q=${this.state.team[0].city}&_limit=3`)
                    .then(response =>
                    {
                    this.setState({
                        teams:teams,
                            related:response.data
                    })
                    })
            })
    }
    render()
    {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div>
                <Header teamData={team[0]}/>
             <div className={styles.videoWrapper}>
                 <h1>{article.title}</h1>
                 <iframe
                 title="videoplayer"
                 width="100%"
                 height="300px"
                 src={`https://www.youtube.com/embed/${article.url}`}>

                 </iframe>

             </div>
                <VideosRelated
                data={this.state.related}
                teams={this.state.teams}
                />
            </div>
        )
    }
}
export default VideoArticle;