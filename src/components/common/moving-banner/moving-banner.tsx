import React from 'react';
import classes from './moving-banner.module.css';

const MovingBanner = () => {
    return (
        <div className={classes.container}>
            <div className={classes.photobanner}>       
                <img className={classes.first} src="/assets/images/banner/banner-mobile-6.png" />
                <img className={classes.img} src="/assets/images/banner/banner-10.png" />
                <img className={classes.img} src="/assets/images/banner/banner-11.png" />
                <img className={classes.img} src="/assets/images/banner/banner-8.png" />
            </div>
        </div>
    )
}

export default MovingBanner;