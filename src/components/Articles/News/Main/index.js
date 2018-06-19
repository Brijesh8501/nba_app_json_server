import React from 'react';
import NewsSlider from '../../../widgets/newsSlider/slider';
import NewsList from '../../../widgets/Newslist/newsList';
const NewsMain = () =>
{
    return (
        <div>
            <NewsSlider type="featured"
                        start = {0}
                        end={3}
                        settings = {{dots:false}}/>
            <NewsList
            type="cardMain"
            loadMore={true}
            start={3}
            amount={5}
            />

        </div>
    )
}
export default NewsMain;