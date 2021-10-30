import React from 'react';
import { Link } from 'react-router-dom';
import { TabContent, Button, TabPane, Nav, NavItem, NavLink, Table } from 'reactstrap';
import classnames from 'classnames';

import { connect } from 'react-redux';

class TicketTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    };

    findCustomer = async (id) => {
        const temp = await this.props.customers.find((customer) => customer._id === id);
        return temp;
    };

    findDepartment = async (id) => {
        const temp2 = await this.props.departments.find((department) => department._id === id);
        return temp2;
    };

    findEmployees = async (id) => {
        const temp3 = await this.props.employees.find((employee) => employee._id === id);
        return temp3;
    };

    // doctors test
    findDoctors = async (id) => {
        const temp4 = await this.props.doctors.find((doctor) => doctor._id === id);
        return temp4;
    };

    // doctors test

    render() {
        const { tickets } = this.props;
        return (
            <div>
                <Nav tabs className='mb-3'>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            <div style={{ cursor: 'pointer' }}>Pending</div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            <div style={{ cursor: 'pointer' }}>Completed</div>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId='1'>
                        {this.state.activeTab === '1' ? (
                            <div>
                                <h2>
                                    Tickets -{' '}
                                    {tickets.filter((ticket) => !ticket.isResolved).length}
                                </h2>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Code No</th>
                                            <th>Customer</th>
                                            <th>Department</th>
                                            <th>Employees</th>
                                            <th>Doctors</th>
                                            <th>Message</th>
                                            <th>Priority</th>
                                            <th>Actions</th>
                                            {/* <th>Remove</th> */}
                                            <th>Complete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.map((ticket) => {
                                            return (
                                                !ticket.isResolved && (
                                                    <tr key={ticket._id}>
                                                        <td>{ticket.code}</td>
                                                        <td>
                                                            {ticket.customer.name
                                                                ? ticket.customer.name
                                                                : this.findCustomer(ticket.customer)
                                                                      .name}{' '}
                                                        </td>
                                                        <td>
                                                            {ticket.department.name
                                                                ? ticket.department.name
                                                                : this.findDepartment(
                                                                      ticket.department
                                                                  ).name}{' '}
                                                        </td>
                                                        <td>
                                                            {ticket.employees[0].name
                                                                ? ticket.employees.map(
                                                                      (emp, index) =>
                                                                          index ===
                                                                          ticket.employees.length -
                                                                              1
                                                                              ? `${emp.name}`
                                                                              : `${emp.name}, `
                                                                  )
                                                                : ticket.employees.map(
                                                                      (emp, index) =>
                                                                          index ===
                                                                          ticket.employees.length -
                                                                              1
                                                                              ? `${
                                                                                    this.findEmployees(
                                                                                        emp
                                                                                    ).name
                                                                                }`
                                                                              : `${
                                                                                    this.findEmployees(
                                                                                        emp
                                                                                    ).name
                                                                                }, `
                                                                  )}
                                                        </td>
                                                        {/* doctors test */}
                                                        <td>
                                                            {ticket.doctors[0].name
                                                                ? ticket.doctors.map((doc, index) =>
                                                                      index ===
                                                                      ticket.doctors.length - 1
                                                                          ? `${doc.name}`
                                                                          : `${doc.name}, `
                                                                  )
                                                                : ticket.doctors.map((doc, index) =>
                                                                      index ===
                                                                      ticket.doctors.length - 1
                                                                          ? `${
                                                                                this.findDoctors(
                                                                                    doc
                                                                                ).name
                                                                            }`
                                                                          : `${
                                                                                this.findDoctors(
                                                                                    doc
                                                                                ).name
                                                                            }, `
                                                                  )}
                                                        </td>
                                                        {/* doctors test */}
                                                        <td>{ticket.message} </td>
                                                        <td>{ticket.priority}</td>
                                                        <td>
                                                            <Link to={`/subtickets/${ticket._id}`}>
                                                                <Button color='info'>show</Button>
                                                            </Link>
                                                        </td>
                                                        {/* <td>
                                                            <Button
                                                                color='danger'
                                                                onClick={() => {
                                                                    this.props.handleRemove(
                                                                        ticket._id
                                                                    );
                                                                }}
                                                            >
                                                                remove
                                                            </Button>
                                                        </td> */}
                                                        <td>
                                                            <input
                                                                type='checkbox'
                                                                onClick={() => {
                                                                    this.props.handleResolve(
                                                                        ticket._id
                                                                    );
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        ) : null}
                    </TabPane>
                    <TabPane tabId='2'>
                        {this.state.activeTab === '2' ? (
                            <div>
                                <h2>
                                    Tickets - {tickets.filter((ticket) => ticket.isResolved).length}
                                </h2>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Code No</th>
                                            <th>Customer</th>
                                            <th>Department</th>
                                            <th>Employees</th>
                                            <th>Doctors</th>
                                            <th>Message</th>
                                            <th>Priority</th>
                                            <th>Actions</th>
                                            {/* <th>Remove</th> */}
                                            <th>Not Complete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.map((ticket) => {
                                            console.log(ticket);
                                            return (
                                                ticket.isResolved && (
                                                    <tr key={ticket._id}>
                                                        <td>{ticket.code}</td>
                                                        <td>
                                                            {ticket.customer.name
                                                                ? ticket.customer.name
                                                                : this.findCustomer(ticket.customer)
                                                                      .name}{' '}
                                                        </td>
                                                        {console.log(ticket.department)}
                                                        <td>
                                                            {ticket.department.name
                                                                ? ticket.department.name
                                                                : this.findCustomer(
                                                                      ticket.department
                                                                  ).name}{' '}
                                                        </td>
                                                        <td>
                                                            {ticket.employees[0].name
                                                                ? ticket.employees.map(
                                                                      (emp, index) =>
                                                                          index ===
                                                                          ticket.employees.length -
                                                                              1
                                                                              ? `${emp.name}`
                                                                              : `${emp.name}, `
                                                                  )
                                                                : ticket.employees.map(
                                                                      (emp, index) =>
                                                                          index ===
                                                                          ticket.employees.length -
                                                                              1
                                                                              ? `${
                                                                                    this.findEmployees(
                                                                                        emp
                                                                                    ).name
                                                                                }`
                                                                              : `${
                                                                                    this.findEmployees(
                                                                                        emp
                                                                                    ).name
                                                                                }, `
                                                                  )}
                                                        </td>

                                                        {/* doctors test sec */}
                                                        <td>
                                                            {ticket.doctors[0].name
                                                                ? ticket.doctors.map(
                                                                      (doc, index) =>
                                                                          index ===
                                                                          ticket.doctors.length -
                                                                              1
                                                                              ? `${doc.name}`
                                                                              : `${doc.name}, `
                                                                  )
                                                                : ticket.doctors.map(
                                                                      (doc, index) =>
                                                                          index ===
                                                                          ticket.doctors.length -
                                                                              1
                                                                              ? `${
                                                                                    this.findDoctors(
                                                                                        doc
                                                                                    ).name
                                                                                }`
                                                                              : `${
                                                                                    this.findDoctors(
                                                                                        doc
                                                                                    ).name
                                                                                }, `
                                                                  )}
                                                        </td>
                                                        {/* doctors test sec */}

                                                        <td>{ticket.message}</td>
                                                        <td>{ticket.priority}</td>
                                                        <td>
                                                            <Link to={`/subtickets/${ticket._id}`}>
                                                                <Button color='info'>show</Button>
                                                            </Link>
                                                        </td>
                                                        {/* <td>
                                                            <Button
                                                                color='danger'
                                                                onClick={() => {
                                                                    this.props.handleRemove(
                                                                        ticket._id
                                                                    );
                                                                }}
                                                            >
                                                                Remove
                                                            </Button>
                                                        </td> */}
                                                        <td>
                                                            <input
                                                                type='checkbox'
                                                                onClick={() => {
                                                                    this.props.handleResolve(
                                                                        ticket._id
                                                                    );
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        ) : null}
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers,
        departments: state.departments,
        employees: state.employees,
        doctors: state.doctors
    };
};

export default connect(mapStateToProps)(TicketTab);
