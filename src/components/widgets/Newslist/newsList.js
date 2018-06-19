import React, {Component} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link} from 'react-router-dom';
import axios from 'axios';
import {Url} from '../../../config';
import styles from './newsList.css';
import Buttons from '../Buttons/buttons';
import CardInfo from '../CardInfo/cardInfo';

class Newslist extends Component
{
     state = {
         teams:[],
         items:[],
         start:this.props.start,
         end:this.props.start + this.props.amount,
         amount:this.props.amount
     }
     componentWillMount()
     {
         this.request(this.state.start,this.state.end)
     }
     request = (start,end) =>
     {
         if(this.state.teams.length < 1)
         {
             axios.get(`${Url}/teams`)
                 .then( response =>
                 {
               this.setState(
                   {
                       teams:response.data
                   }
               )
                 })

         }
         axios.get(`${Url}/articles?_start=${start}&_end=${end}`)
             .then( response => {
                 this.setState(
                     {
                         items:[...this.state.items,...response.data],
                         end : end
                     }
                 )
             })
     }
     loadMore = () =>
     {
         let endpoint = this.state.end + this.state.amount;
         this.request(this.state.end,endpoint)
     }
     renderNews = (type) =>
     {

         let template = null;

         switch(type)
         {
             case('card'):
                 template = this.state.items.map( (item,index) =>
                 {
                     return (
                         <CSSTransition
                            classNames={{
                                enter:styles.newslisted_wrapper,
                                enterActive:styles.newslisted_wrapper_enter
                            }}
                            timeout={500}
                            key={index}
                         >
                         <div>
                             <div className={styles.newslisted_item}>
                                 <Link to={`/articles/${item.id}`}>
                                     <CardInfo teams={this.state.teams} team={item.id} date={item.date}/>
                                     <h2>{item.title}</h2>
                                 </Link>

                             </div>

                         </div>
                         </CSSTransition>
                     )
                 });
                 break;
             case 'cardMain' :
                 template = this.state.items.map( (item,index) => {
                     return (
                         <CSSTransition
                             classNames={{
                                 enter: styles.newslisted_wrapper,
                                 enterActive: styles.newslisted_wrapper_enter
                             }}
                             timeout={500}
                             key={index}
                         >
                             <Link to={`/articles/${item.id}`}>
                                 <div className={styles.flex_wrapper}>
                                     <div className={styles.left}
                                     style={{background:`url('/images/articles/${item.image}')`}}
                                     >
                                         <div></div>
                                     </div>
                                     <div className={styles.right}>
                                         <CardInfo teams={this.state.teams} team={item.id} date={item.date}/>
                                         <h2>{item.title}</h2>
                                     </div>

                                 </div>
                             </Link>
                         </CSSTransition>
                     )
                 });
                 break;
             default:
                 template = null;
         }
         return template;
     }
    render()
    {
        console.log(this.state.teams);
        return(
            <div>
                <TransitionGroup
                  component="div"
                className="list"
                >
                {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Buttons
                type="loadmore"
                loadMore={() => this.loadMore()}
                cta = "Load More News"
                />

                </div>
        )
    }


}
export default Newslist;