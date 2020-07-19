import React from 'react';
import MenuItem from '../MenuItem/menuItem'
import sections from './data.json'
import './menuDirectory.scss'


const MenuDirectory = () => {

    return (
        <div className="directory-menu">
            { sections.length>0 && sections.map(({id, ...otherData}) => ( 
                <MenuItem key={id} {...otherData}/>
            ))
            }
        </div>
    )
};

export default MenuDirectory;