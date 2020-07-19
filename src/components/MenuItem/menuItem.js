import React from 'react';
import './menuItem.scss';

const MenuItem = ({data}) => {
    const {title, imageUrl, size} = data;

    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
             }} />
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
};

export default MenuItem;