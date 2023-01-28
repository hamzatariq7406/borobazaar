import React from 'react';
import classes from './moving-banner.module.css';

const MovingBanner = ({ subdomain }: any) => {

    return (
        <div className={classes.container}>
            <div className={classes.photobanner}>
                <img
                    className={classes.first}
                    style={{ width: "10%" }}
                    src={subdomain ? `/assets/images/${subdomain}-moving1.jpg` : "/assets/images/003.png"}
                />
                <img
                    className={classes.img}
                    style={{ width: "10%" }}
                    src={"/assets/images/009.png"}
                />

            </div>
        </div>
    )
}

export default MovingBanner;