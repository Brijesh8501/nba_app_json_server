import React from 'react';
import sliderstyle from './slider_nba.css';
import {Link} from 'react-router-dom';


const SliderShow = (props) => {
    return (
        <div>
            <div className={sliderstyle.featured_item}>

                <div className={sliderstyle.featured_image}
                style={{
                    background:`url(../images/articles/${props.eachNewsSlider.image})`
                }}>
                    <Link to={`/articles/${props.eachNewsSlider.id}`}>
                        <div className={sliderstyle.featured_caption}>
                            {props.eachNewsSlider.title}
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}
export default SliderShow;