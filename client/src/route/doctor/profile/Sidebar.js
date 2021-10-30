import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__element'>
                <h3>Setting</h3>
            </div>
            <div className='sidebar__element mt-1 btn' style={{ border: '1px solid red' }}>
                <Link to='/docprofile' style={{ color: 'black', textDecoration: 'none' }}>
                    Edit Profile
                </Link>
            </div>
            <div className='sidebar__element mt-1 btn' style={{ border: '1px solid red' }}>
                <Link to='/docupdatePassword' style={{ color: 'black', textDecoration: 'none' }}>
                    Change Password
                </Link>
            </div>
        </div>
    );
};
export default Sidebar;
