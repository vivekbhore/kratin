import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Toaster } from 'react-hot-toast';
import { RadioGroup,Radio } from 'react-radio-group';
// import moment from "moment";
// import { Country, State, City } from 'country-state-city';
// import { FormGroup, Label, Input } from 'reactstrap';

import { Form } from 'react-bootstrap';

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import {updateProfile} from "../../../actions/user"
// import axios from 'axios';
// import Loader from "./Loader";
import Sidebar from './Sidebar';
import '../../user/commonProfile.css';
import LoadingComponent from 'components/loading';
import ErrorMessage from 'components/ErrorMessage';

const Profile = () => {
    // console.log(Country.getAllCountries());
    // console.log(State.getAllStates());
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
                // console.log(user);
    const history=useHistory();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [gender, setGender] = useState(null);
    const [newgender, setNewender] = useState(null);
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState('');

    const [pin, setPin] = useState('');

    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const [pic, setPic] = useState();
    const [picMessage, setPicMessage] = useState();
    const [photoloading, setPhotoloading] = useState(false);



    useEffect(() => {
        if (!user) {
            history.push('/');
        } else {
            setName(user.username);
            setEmail(user.email);
            setPic(user.pic);
            setPin(user.pin);
            setGender(user.gender);
            setPhone(user.phone);
            setDob(user.dob);
            setAddress(user.address);
            setCountry(user.country);
            setState(user.state);
            setCity(user.city);
        }
    }, [history, user]);

    useEffect(() => {
    //  setGender(gender)
    setNewender(gender)
    }, [gender])

    const postDetails = (pics) => {
        setPhotoloading(true);
        setPicMessage(null);
        console.log(pics);
        if (pics !== undefined) {
            if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
                const data = new FormData();
                data.append('file', pics);
                data.append('upload_preset', 'ml_default');
                data.append('cloud_name', 'vivekbhore');
                fetch('https://api.cloudinary.com/v1_1/vivekbhore/image/upload', {
                    method: 'post',
                    body: data
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setPic(data.url.toString());
                        setPhotoloading(false);
                        console.log(pic);
                    })
                    .catch((err) => {
                        console.log(err);
                        setPhotoloading(false);
                    });
            } else {
                setPhotoloading(false);
                return setPicMessage('Please Select an Image');
            }
        } else {
            setPhotoloading(false);
        }
    };


    const submitHandler = (e) => {
        e.preventDefault();
        const redirect=()=>{
        history.push('/users/adprofile');
        window.location.reload()
        //   alert("testing")
       }



        dispatch(
            updateProfile(
                { name, email, pic, pin, state, country, city, phone, newgender, dob, address },
                redirect
            )
        );
    };

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
                className='container rounded bg-white mb-5 mt-100'
                style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
            >
                <div className='row'>
                    <div className='col-md-3 border-right'>
                        <div className='d-flex flex-column align-items-center text-center p-3 py-5'>
                            <img
                                alt={name}
                                className='rounded-circle mt-5 sidebar__element'
                                src={pic}
                                width='100px'
                                height='100px'
                            />
                        </div>
                        <Sidebar />
                    </div>
                    <div className='col-md-5 border-right'>
                        <div className='p-3 py-5'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h4 className='text-right'>Profile Settings</h4>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-12'>
                                    <label className='labels'>Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='first name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <label className='labels'>Gender</label>
                                    <br />
                                    <RadioGroup
                                        name='gender'
                                        selectedValue={gender}
                                        onChange={(e) => setGender(e)}
                                    >
                                        {/* {console.log(gender)} */}
                                        <Radio value='male' />
                                        male
                                        <br />
                                        <Radio value='female' />
                                        female
                                    </RadioGroup>
                                    <br />
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>Date of Birth</label>
                                    {/* {console.log(dob)} */}
                                    {/* {console.log(typeof dob)} */}

                                    {/* <DatePicker
                                        selected={dob}
                                        onChange={(date) => setDob(date)}
                                        dateFormat='yyyy/MM/dd'
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                    /> */}
                                    <input
                                        type='date'
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>Address</label>
                                    <input
                                        type='text'
                                        onChange={(e) => setAddress(e.target.value)}
                                        className='form-control'
                                        placeholder='enter address'
                                        value={address}
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>City</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='city'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <Form className='sidebar'>
                                        {/* <span className='font-weight-bold'>{name}</span>
                                <br />
                                <span className='text-black-50'>{email}</span> */}
                                        <span> </span>
                                        {/* deve */}
                                        {picMessage && (
                                            <ErrorMessage variant='danger'>
                                                {picMessage}
                                            </ErrorMessage>
                                        )}
                                        <br />
                                        <br />
                                        <div
                                            style={{
                                                display: 'flex',
                                                // marginLeft: '140px',
                                                wordWrap: 'break-word'
                                            }}
                                        >
                                            <Form.File
                                                onChange={(e) => postDetails(e.target.files[0])}
                                                id='custom-file'
                                                type='image/png'
                                                // label='Upload'
                                                style={{}}
                                                custom
                                                aria-label='File browser example'
                                            />
                                            <br />
                                            {photoloading && <LoadingComponent loading />}
                                        </div>
                                        {/* deve */}
                                    </Form>
                                </div>
                                <div className='col-md-12'>
                                    <Form>
                                        <Form.Label>Change Profile Picture</Form.Label>
                                    </Form>
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button
                                    className='btn btn-primary profile-button'
                                    type='button'
                                    onClick={submitHandler}
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='p-3 py-5'>
                            <div className='d-flex justify-content-between align-items-center experience'>
                                <span>Edit Experience</span>
                            </div>
                            <br />
                            <div className='col-md-12'>
                                <label className='labels'>Email ID</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='enter email id'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>{' '}
                            <br />
                            <div className='col-md-12'>
                                <label className='labels'>PhoneNumber</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='enter phone number'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className='col-md-12'>
                                <label className='labels'>Country</label>
                                <CountryDropdown
                                    className='form-control'
                                    value={country}
                                    onChange={(country) => setCountry(country)}
                                />
                            </div>
                            <div className='col-md-12'>
                                <label className='labels'>State/Region</label>
                                <RegionDropdown
                                    className='form-control'
                                    country={country}
                                    value={state}
                                    onChange={(state) => setState(state)}
                                />
                            </div>
                            <div className='col-md-12'>
                                <label className='labels'>Postal code</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='pin code'
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;

///

///
