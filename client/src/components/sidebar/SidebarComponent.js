import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { useSelector } from 'react-redux';



import swal from 'sweetalert2';
import { connect } from 'react-redux';
import { startRemoveUser } from '../../actions/user';  


import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent(props) {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;
      const user = useSelector((state) => state.user);
    //   console.log(user);


     async function logout() {
         swal.fire({
             title: 'Are you sure to log out?',
             icon: 'warning',
             buttons: true,
             dangerMode: true
         }).then((confirmLogout) => {
             if (confirmLogout) {
                 props.dispatch(startRemoveUser());
                 swal.fire('Successfully Logged out', { icon: 'success' });
                 push(SLUGS.login);
             }
         });
     }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            {user.role === 1 && (
                <MenuItem
                    id={SLUGS.dashboard}
                    title='Dashboard'
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.admindashboard)}
                />
            )}
            {user.role === 2 && (
                <MenuItem
                    id={SLUGS.dashboard}
                    title='Dashboard'
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.subadmindashboard)}
                />
            )}
            {user.role === 3 && (
                <MenuItem
                    id={SLUGS.dashboard}
                    title='Dashboard'
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.docdashboard)}
                />
            )}
            {user.role === 4 && (
                <MenuItem
                    id={SLUGS.dashboard}
                    title='Dashboard'
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.patdashboard)}
                />
            )}
            {user.role === 1 && (
                <MenuItem
                    id={SLUGS.overview}
                    items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                    title='Overview'
                    icon={IconOverview}
                >
                    <MenuItem
                        id={SLUGS.overview}
                        title='Customers'
                        level={2}
                        icon={IconAgents}
                        onClick={() => onClick(SLUGS.CustomersList)}
                    />

                    <MenuItem
                        id={SLUGS.overviewTwo}
                        title='Employees'
                        level={2}
                        icon={IconContacts}
                        onClick={() => onClick(SLUGS.EmployeesList)}
                    />

                    <MenuItem
                        id={SLUGS.overviewThree}
                        title='Departments'
                        level={2}
                        icon={IconArticles}
                        onClick={() => onClick(SLUGS.DepartmentsList)}
                    />
                </MenuItem>
            )}

            {user.role==1 && (
                <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.TicketsList)}
            />
            )}

          {user.role==3 && (
                <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.docTicketsList)}
            />
            )}



            {user.role==4 && (
                <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.patTicketsList)} 
            />
            )}
            {user.role==2 && (
                <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.subTicketsList)} 
            />
            )}
            
               
            {(user.role === 1) && (
                <MenuItem
                    id={SLUGS.DoctorsList}
                    title='Doctors'
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.DoctorsList)}
                />
            )}

           {(user.role === 2) && (
                <MenuItem
                    id={SLUGS.SubDoctorsList}
                    title='Doctors'
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.SubDoctorsList)}
                />
            )}
 
               {user.role==2 && (<MenuItem
                        id={SLUGS.customers}
                        title='Customers'
                        icon={IconAgents}
                        onClick={() => onClick(SLUGS.subcustomers)}
                    />)}

            <MenuItem
                id={SLUGS.ideas}
                items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Ideas'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.ideas}
                    title='Sub Item 1'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ideas)}
                />
                <MenuItem
                    id={SLUGS.ideasTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.ideasTwo)}
                />
                <MenuItem
                    id={SLUGS.ideasThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.ideasThree)}
                />
            </MenuItem>
            {/* <MenuItem
                id={SLUGS.SubReports}
                title='Reports'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.Reports)}
            /> */}

            {(user.role==1) && (<MenuItem
                id={SLUGS.SubReports}
                title='Reports'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.Reports)}
            />)}

            {(user.role==2) && (<MenuItem
                id={SLUGS.SubReports}
                title='Reports'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.SubReports)}
            />)}
            <MenuItem
                id={SLUGS.agents}
                title='Payments' 
                icon={IconAgents}
                onClick={() => onClick(SLUGS.agents)}
            />
            <MenuItem
                id={SLUGS.articles}
                title='Articles'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.articles)}
            />
            <div className={classes.separator}></div>

            {user.role === 1 && (
                <MenuItem
                    id={SLUGS.settings}
                    title='Settings'
                    icon={IconSettings}
                    onClick={() => onClick(SLUGS.adprofile)}
                />
            )}
            {user.role === 2 && (
                <MenuItem
                    id={SLUGS.settings}
                    title='Settings'
                    icon={IconSettings}
                    onClick={() => onClick(SLUGS.subprofile)}
                />
            )}
            {user.role === 3 && (
                <MenuItem
                    id={SLUGS.settings}
                    title='Settings'
                    icon={IconSettings}
                    onClick={() => onClick(SLUGS.docprofile)}
                />
            )}
            {user.role === 4 && (
                <MenuItem
                    id={SLUGS.settings}
                    title='Settings'
                    icon={IconSettings}
                    onClick={() => onClick(SLUGS.patprofile)}
                />
            )}
            {/* subprofile */}
            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(SidebarComponent);