import React from 'react';
import {withRouter} from 'react-router-dom'
import './menuItem.scss';

const MenuItem = props => {
    const {title, imageUrl, size, linkUrl, history, match} = props;
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);