import React from 'react';
import './Single.css'
import Sidebar from '../../../components/SideBar/Sidebar';
import SinglePost from '../../../components/singlePost/SinglePost';
const Single = () => {
    return (
        <div className='single'>
            <SinglePost></SinglePost>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Single;