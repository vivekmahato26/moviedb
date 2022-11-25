import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Carousel } from 'antd';
import { fetchBanners } from '../redux/slice/bannerSlice';
import { imgUrl } from "../apikeys";
import {InfoCircleOutlined,CaretRightOutlined} from "@ant-design/icons";

import styles from "../styles/banner.module.scss";
export default function Banner() {
    const banners = useSelector((state) => state.banner);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBanners());
    }, [])
    console.log(banners);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay>
            {banners.value.results && banners.value.results.map(e => {
                return (
                    <div>
                        <div className={styles.container} style={{ backgroundImage: `url("${imgUrl + "original" + e.backdrop_path}")` }}>
                            {/* <img src={imgUrl+"w500"+e.backdrop_path} /> */}
                            <div className={styles.content}>
                                <p className={styles.title}>{e.title}</p>
                                <p className={styles.language}>{e.original_language}</p>
                                <p className={styles.desc}>{e.overview}</p>
                                <button className={styles.buttonL}><CaretRightOutlined /> Play</button>
                                <button className={styles.buttonR}> <InfoCircleOutlined /> More Info</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
}
