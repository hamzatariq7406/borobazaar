import React from 'react';
import classes from './moving-banner.module.css';

const MovingBanner = () => {
    return (
        <div className={classes.container}>
            <div className={classes.photobanner}>     
            <img className={classes.first}  style={{width:"10%"}} src="/assets/images/banner/banner.jpg" />  
                <img className={classes.img} style={{width:"10%"}} src="/assets/images/banner/cosmetic.jpg" />      
            </div>
        </div>
    )
}

export default MovingBanner;