import React from 'react'

function test() {
    return (
        <div>
             <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" /><span class="font-weight-bold">Amelly</span><span class="text-black-50">amelly12@bbb.com</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="" /></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value="" /></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value="" /></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div>
                    <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
            </div>
        </div>
    </div>
</div>
</div>


    )
}

export default test


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
         <div className='container mt-100'>
             <div className='row ml-minus-15 mr-minus-15'>
                 <div className='col-3 p-15'>
                     <Sidebar />
                 </div>
                 <div className='col-9 p-15'>
                     {/* <h1>this is my profile</h1> */}
                     <div class='container rounded bg-white mt-5 mb-5'>
                         <div class='row'>
                             <div class='col-md-3 border-right'>
                                 <div class='d-flex flex-column align-items-center text-center p-3 py-5'>
                                     <img
                                         class='rounded-circle mt-5'
                                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU'
                                     />
                                     <span class='font-weight-bold'>Amelly</span>
                                     <span class='text-black-50'>amelly12@bbb.com</span>
                                     <span> </span>
                                 </div>
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
                                         <button
                                             class='btn btn-primary profile-button'
                                             type='button'
                                         >
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
                 </div>
             </div>
             {/* <h1>this is my profile</h1> */}
         </div>
         {/* </div>
      </div> */}
     </>
 );


 /////////////////////////////
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
          <div className='container mt-100'>
              <div className='row ml-minus-15 mr-minus-15'>
                  <div className='col-3 p-15'>
                      <Sidebar />
                  </div>
                  <div className='col-9 p-15'>
                      {/* <h1>this is my profile</h1> */}
                      <div class='container emp-profile'>
                          <form method='post'>
                              <div class='row'>
                                  <div class='col-md-4'>
                                      <div class='profile-img'>
                                          <img
                                              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'
                                              alt=''
                                          />
                                          <div class='file btn btn-lg btn-primary'>
                                              Change Photo
                                              <input type='file' name='file' />
                                          </div>
                                      </div>
                                  </div>
                                  <div class='col-md-6'>
                                      <div class='profile-head'>
                                          <h5>Kshiti Ghelani</h5>
                                          <h6>Web Developer and Designer</h6>
                                          <p class='proile-rating'>
                                              RANKINGS : <span>8/10</span>
                                          </p>
                                          <ul class='nav nav-tabs' id='myTab' role='tablist'>
                                              <li class='nav-item'>
                                                  <a
                                                      class='nav-link active'
                                                      id='home-tab'
                                                      data-toggle='tab'
                                                      href='#home'
                                                      role='tab'
                                                      aria-controls='home'
                                                      aria-selected='true'
                                                  >
                                                      About
                                                  </a>
                                              </li>
                                              <li class='nav-item'>
                                                  <a
                                                      class='nav-link'
                                                      id='profile-tab'
                                                      data-toggle='tab'
                                                      href='#profile'
                                                      role='tab'
                                                      aria-controls='profile'
                                                      aria-selected='false'
                                                  >
                                                      Timeline
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class='col-md-2'>
                                      <input
                                          type='submit'
                                          class='profile-edit-btn'
                                          name='btnAddMore'
                                          value='Edit Profile'
                                      />
                                  </div>
                              </div>
                              <div class='row'>
                                  <div class='col-md-4'>
                                      <div class='profile-work'>
                                          <p>WORK LINK</p>
                                          <a href=''>Website Link</a>
                                          <br />
                                          <a href=''>Bootsnipp Profile</a>
                                          <br />
                                          <a href=''>Bootply Profile</a>
                                          <p>SKILLS</p>
                                          <a href=''>Web Designer</a>
                                          <br />
                                          <a href=''>Web Developer</a>
                                          <br />
                                          <a href=''>WordPress</a>
                                          <br />
                                          <a href=''>WooCommerce</a>
                                          <br />
                                          <a href=''>PHP, .Net</a>
                                          <br />
                                      </div>
                                  </div>
                                  <div class='col-md-8'>
                                      <div class='tab-content profile-tab' id='myTabContent'>
                                          <div
                                              class='tab-pane fade show active'
                                              id='home'
                                              role='tabpanel'
                                              aria-labelledby='home-tab'
                                          >
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>User Id</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>Kshiti123</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Name</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>Kshiti Ghelani</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Email</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>kshitighelani@gmail.com</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Phone</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>123 456 7890</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Profession</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>Web Developer and Designer</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div
                                              class='tab-pane fade'
                                              id='profile'
                                              role='tabpanel'
                                              aria-labelledby='profile-tab'
                                          >
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Experience</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>Expert</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Hourly Rate</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>10$/hr</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Total Projects</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>230</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>English Level</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>Expert</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-6'>
                                                      <label>Availability</label>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <p>6 months</p>
                                                  </div>
                                              </div>
                                              <div class='row'>
                                                  <div class='col-md-12'>
                                                      <label>Your Bio</label>
                                                      <br />
                                                      <p>Your detail description</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                      {/* <h1>this is my profile</h1> */}
                  </div>
              </div>
          </div>
 /////////////////////////////


 &&&&&&&&&&
   <AdminRoute exact path={SLUGS.admindashboard} component={AdminDashboard} />
                <AdminRoute exact path={SLUGS.adprofile} component={Profile} />
                <AdminRoute exact path={SLUGS.updateadprofile} component={EditProfile} />

                <AdminRoute exact path='/customers' component={CustomersList} exact={true} />
                <AdminRoute exact path='/customers/new' component={CustomerNew} />
                <AdminRoute exact path='/customers/edit/:id' component={CustomerEdit} />
                <AdminRoute exact path='/customers/:id' component={CustomerShow} />

                <AdminRoute exact path='/departments' component={DepartmentsList} exact={true} />
                <AdminRoute exact path='/departments/edit/:id' component={DepartmentEdit} />
                <AdminRoute exact path='/departments/:id' component={DepartmentShow} />

                <AdminRoute exact path='/employees' component={EmployeesList} exact={true} />
                <AdminRoute exact path='/employees/new' component={EmployeeNew} />
                <AdminRoute exact path='/employees/edit/:id' component={EmployeeEdit} />
                <AdminRoute exact path='/employees/:id' component={EmployeeShow} />

                <AdminRoute exact path='/tickets' component={TicketsList} exact={true} />
                <AdminRoute exact path='/tickets/new' component={TicketNew} />
                <AdminRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <AdminRoute exact path='/tickets/:id' component={TicketShow} />

                <AdminRoute exact path='/reports' component={Reports} />

                <AdminRoute exact path='/createNewPassword/:token' component={CreateNewPassword} />
                <AdminRoute exact path='/updatePassword' exact component={ChangePassword} />

                {/* admin */}

                {/* subadmin */}
                <SubAdminRoute exact path={SLUGS.admindashboard} component={SubAdminDashboard} />
                <SubAdminRoute exact path={SLUGS.adprofile} component={Profile} />

                <SubAdminRoute exact path='/customers' component={CustomersList} exact={true} />
                <SubAdminRoute exact path='/customers/new' component={CustomerNew} />
                <SubAdminRoute exact path='/customers/edit/:id' component={CustomerEdit} />
                <SubAdminRoute exact path='/customers/:id' component={CustomerShow} />

                <SubAdminRoute exact path='/tickets' component={TicketsList} exact={true} />
                <SubAdminRoute exact path='/tickets/new' component={TicketNew} />
                <SubAdminRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <SubAdminRoute exact path='/tickets/:id' component={TicketShow} />

                {/* subadmin */}

                {/* doctor */}
                <DoctorRoute exact path={SLUGS.admindashboard} component={DoctorDashboard} />
                <DoctorRoute exact path={SLUGS.adprofile} component={Profile} />

                <DoctorRoute exact path='/tickets' component={TicketsList} exact={true} />
                <DoctorRoute exact path='/tickets/new' component={TicketNew} />
                <DoctorRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <DoctorRoute exact path='/tickets/:id' component={TicketShow} />

                {/* doctor */}

                {/* patient */}
                <PatientRoute exact path='/patdashboard' component={PatientDashboard} />
                <PatientRoute exact path={SLUGS.adprofile} component={Profile} />

                <PatientRoute exact path='/tickets' component={TicketsList} exact={true} />
                <PatientRoute exact path='/tickets/new' component={TicketNew} />
                <PatientRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <PatientRoute exact path='/tickets/:id' component={TicketShow} />

                {/* patient */}

                <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />

 &&&&&&&&&&