import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imgUrl } from '../apikeys';
import { fetchPopular } from '../redux/slice/popularSlice';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Popular() {
    const popular = useSelector(state => state.popular);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPopular());
    }, [])
    const { results } = popular.value;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9
      };
    return (
        <div>
            <h2>Popular</h2>
            <Slider {...settings}>
                {results && results.map(e => (
                    <div>
                        {/* {e.title} */}
                        <img style={{height: "250px"}} src={imgUrl+"w500/"+e.poster_path} alt={e.title}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
