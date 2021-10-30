import React, { useState } from 'react';
import { startSetUser } from '../../actions/user';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch} from 'react-redux';
// import SLUGS from '../../resources/slugs';
import { useHistory } from 'react-router-dom';

import PublicNavbar from './PublicNavbar'


import {Link} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const handleSubmit = (e) => {
        console.log(email);
        console.log(password);
        e.preventDefault();
        const loginData = {
            email: email,
            password: password
        };

        const redirect = (user) => {
            if (user) {
                 if (user && user.role === 1) {
                     history.push('/admindashboard');
                 } else if (user && user.role === 2) {
                     history.push('/subadmindashboard');
                 } else if (user && user.role === 3) {
                     history.push('/docdashboard');
                 } else if (user && user.role === 4) {
                    console.log('inside redirect');
                    history.push('/patdashboard');
                 } else {
                     history.push('/publicdashboard');
                 }

            }
        };

         const redirectToPassChange = (user) => {
             if (user) {
                //  if (user && user.role === 1) {
                //      return <Redirect to='/admin/dashboard' />;
                //  } else {
                //      return <Redirect to='/user/dashboard' />;
                //  }
                if (user && user.role === 1) {
                    history.push('/admindashboard');
                } else if (user && user.role === 2) {
                    history.push('/subupdatePassword');
                } else if (user && user.role === 3) {
                    history.push('/docupdatePassword');
                } else if (user && user.role === 4) {
                    history.push('/patupdatePassword');
                } else {
                    history.push('/publicdashboard');
                }
             }
         };
        dispatch(startSetUser(loginData, redirect, redirectToPassChange));
    };

    return (
        <>
            <PublicNavbar />
            <div className='justify-content-md-center '>
                <form className='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h1 mb-3 font-weight-normal text-center'>Login</h1>

                    <label htmlFor='email' className='sr-only'>
                        Email
                    </label>
                    <input
                        type='text'
                        id='email'
                        className='form-control mb-3'
                        placeholder='Email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor='password' className='sr-only'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='form-control mb-3'
                        placeholder='Password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='btn btn-lg btn-primary btn-block' type='submit'>
                        Login
                    </button>

                    <br />
                    <br />
                    <Link to='/forgot_password'>
                        <button className='btn btn-lg btn-primary btn-block'>
                            Forgot Password
                        </button>
                    </Link>
                    <br />
                    <hr />
                    <h3>Admin login</h3>
                    <h4>Username = vivekbhore50@gmail.com</h4>
                    <h4>Password = Abc@123</h4>
                    <br />
                    <hr />
                    <h3>SubAdmin login</h3>
                    <h4>Username = vivekbhore5000@gmail.com</h4>
                    <h4>Password = Mno@123</h4>
                    <br />
                    <hr />
                    <h3>Doctor login</h3>
                    <h4>Username = kalyanibhore2020@gmail.com</h4>
                    <h4>Password = Pqr@123</h4>
                    <br />
                    <hr />
                    <h3>Patient login</h3>
                    <h4>Username = bhoresudhakar26@gmail.com</h4>
                    <h4>Password = Xyz@123</h4>
                    <br />
                    <hr />
                    <br />
                    
                </form>
            </div>
        </>
    );
};

export default Login;

// import React from 'react'
// import {connect} from 'react-redux'
// // import "bootstrap/dist/css/bootstrap.min.css";

// // import PublicNavbar from './PublicNavbar'

// // import {startSetUser} from '../../actions/user'
// import {startSetUser} from '../../actions/user'

// class Login extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }

//     handleClick = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const loginData = {
//             email: this.state.email,
//             password: this.state.password
//         }
//         const redirect = () => this.props.history.push('/')
//         this.props.dispatch(startSetUser(loginData,redirect))

//     }

//     render(){
//         return (
//             <>
//             {/* <PublicNavbar /> */}
//                 <div className='justify-content-md-center '>
//                     <form className='form-signin' onSubmit={this.handleSubmit}>
//                         <h1 className='h1 mb-3 font-weight-normal text-center'>Login</h1>

//                         <label htmlFor='email' className='sr-only'>
//                             Email
//                         </label>
//                         <input
//                             type='text'
//                             id='email'
//                             className='form-control mb-3'
//                             placeholder='Email'
//                             name='email'
//                             onChange={this.handleClick}
//                         />

//                         <label htmlFor='password' className='sr-only'>
//                             Password
//                         </label>
//                         <input
//                             type='password'
//                             id='password'
//                             className='form-control mb-3'
//                             placeholder='Password'
//                             name='password'
//                             onChange={this.handleClick}
//                         />

//                         <button className='btn btn-lg btn-primary btn-block' type='submit'>
//                             Login
//                         </button>
//                     </form>
//                 </div>
//             </>
//         );
//     }
// }

// const mapsStateToProps = (state) => {
//     return {
//        user:state.user
//     }
// }

// export default connect(mapsStateToProps)(Login)
