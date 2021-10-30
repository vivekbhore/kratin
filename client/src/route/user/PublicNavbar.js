import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
   } from 'reactstrap';

import { connect } from 'react-redux';

// import swal from 'sweetalert2';

function PublicNavbar(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <Navbar color='blue' dark expand='md' className='mb-5 bg-primary'>
                <NavbarBrand>OneSmarter HealthCare</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Link className='nav-link text-white' to='/publicdashboard'>
                                Home
                            </Link>
                        </NavItem>
                        <>
                            <NavItem>
                                <Link className='nav-link text-white' to='/login'>
                                    Login
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link text-white' to='/signup'>
                                    Register
                                </Link>
                            </NavItem>
                        </>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

// export default connect(mapStateToProps)(App);

export default connect(mapStateToProps)(PublicNavbar);
