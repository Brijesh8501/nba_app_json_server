import React from 'react';
import SliderShow from './slider_show';
import Slick from 'react-slick';

const SliderTemplates = (props) =>
{
    let template = null;
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
}
  switch(props.type)
  {
      case ('featured') :

          template = [...props.news].map( (item,index) => {
              return (
                  <SliderShow eachNewsSlider = {item} key={index} indexes={index}/>
              )
          } )
          break;
      default :
          template = null;
  }
    return (<Slick {...settings}>
            { template }
        </Slick>
    )
}

export default SliderTemplates;