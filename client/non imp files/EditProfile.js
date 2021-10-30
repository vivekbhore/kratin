import React from 'react';
import { Helmet } from 'react-helmet';
// import { useDispatch } from 'react-redux';
// import { Link, useParams } from 'react-router-dom'; 

import { Toaster } from 'react-hot-toast';

// import axios from 'axios';
// import Loader from "./Loader";
import Sidebar from './Sidebar';
import '../../user/commonProfile.css';

const EditProfile = () => {
    // const dispatch = useDispatch();

    return (
        <>
            <Helmet>
                <title>User Dashboard</title>
                <meta name='description' content='User Dashboard' />
            </Helmet>
            <Toaster
                position='top-center'
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '14px'
                    }
                }}
            />
            <div
                class='container rounded bg-white mb-5 mt-100'
                style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
            >
                <div class='row'>
                    <div class='col-md-3 border-right'>
                        <div class='d-flex flex-column align-items-center text-center p-3 py-5'>
                            <img
                                alt="dummy"
                                class='rounded-circle mt-5'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU'
                            />
                            <span class='font-weight-bold'>Amelly</span>
                            <span class='text-black-50'>amelly12@bbb.com</span>
                            <span> </span>
                        </div>
                        <Sidebar />
                    </div>
                    <div class='col-md-5 border-right'>
                        <div class='p-3 py-5'>
                            <div class='d-flex justify-content-between align-items-center mb-3'>
                                <h4 class='text-right'>Profile Settings</h4>
                            </div>
                            <div class='row mt-2'>
                                <div class='col-md-6'>
                                    <label class='labels'>Name</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='first name'
                                        value=''
                                    />
                                </div>
                                <div class='col-md-6'>
                                    <label class='labels'>Surname</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        value=''
                                        placeholder='surname'
                                    />
                                </div>
                            </div>
                            <div class='row mt-3'>
                                <div class='col-md-12'>
                                    <label class='labels'>PhoneNumber</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='enter phone number'
                                        value=''
                                    />
                                </div>
                                <div class='col-md-12'>
                                    <label class='labels'>Address</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='enter address'
                                        value=''
                                    />
                                </div>
                                <div class='col-md-12'>
                                    <label class='labels'>Email ID</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='enter email id'
                                        value=''
                                    />
                                </div>
                                <div class='col-md-12'>
                                    <label class='labels'>Education</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='education'
                                        value=''
                                    />
                                </div>
                            </div>
                            <div class='row mt-3'>
                                <div class='col-md-6'>
                                    <label class='labels'>Country</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='country'
                                        value=''
                                    />
                                </div>
                                <div class='col-md-6'>
                                    <label class='labels'>State/Region</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        value=''
                                        placeholder='state'
                                    />
                                </div>
                            </div>
                            <div class='mt-5 text-center'>
                                <button class='btn btn-primary profile-button' type='button'>
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-4'>
                        <div class='p-3 py-5'>
                            <div class='d-flex justify-content-between align-items-center experience'>
                                <span>Edit Experience</span>
                                <span class='border px-3 p-1 add-experience'>
                                    <i class='fa fa-plus'></i>&nbsp;Experience
                                </span>
                            </div>
                            <br />
                            <div class='col-md-12'>
                                <label class='labels'>Experience in Designing</label>
                                <input
                                    type='text'
                                    class='form-control'
                                    placeholder='experience'
                                    value=''
                                />
                            </div>{' '}
                            <br />
                            <div class='col-md-12'>
                                <label class='labels'>Additional Details</label>
                                <input
                                    type='text'
                                    class='form-control'
                                    placeholder='additional details'
                                    value=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfile;

///

///
