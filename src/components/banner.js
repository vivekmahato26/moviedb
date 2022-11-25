import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';
import { fetchBanners } from '../redux/slice/bannerSlice';

export default function Banner() {
    const banners = useSelector((state) => state.banner);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBanners());
    }, [])
    console.log(banners);
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
        <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    )
}
