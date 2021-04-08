import React, { Fragment, Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class BookingDetails extends Component {
    render() {
        const {
            bookingId,
            car,
            license,
            startDate,
            endDate,
            startMileage,
            endMileage,
            firstName,
            lastName,
            customerId,
            isOpen,
        } = this.props.booking;

        return (
            <Fragment>
                <Header as="h1">{bookingId}</Header>

                <Table striped>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><strong>Customer</strong></Table.Cell>
                            <Table.Cell><Link to={"/customer/" + customerId}>{`${firstName} ${lastName}`}</Link></Table.Cell>
                        </Table.Row>

                        {!isOpen &&
                            <Table.Row>
                                <Table.Cell><strong>Invoice</strong></Table.Cell>
                                <Table.Cell><Link to={"/invoice/" + bookingId}>Click here</Link></Table.Cell>
                            </Table.Row>
                        }

                        {isOpen &&
                            <Table.Row>
                                <Table.Cell><strong>End booking</strong></Table.Cell>
                                <Table.Cell><Link to={"/end/" + bookingId}>Click here</Link></Table.Cell>
                            </Table.Row>
                        }

                        <Table.Row>
                            <Table.Cell><strong>Start</strong></Table.Cell>
                            <Table.Cell>{new Date(startDate).toLocaleString("sv-SE")}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>End</strong></Table.Cell>
                            <Table.Cell>{endDate !== null ? new Date(endDate).toLocaleString("sv-SE") : "-"}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Car</strong></Table.Cell>
                            <Table.Cell>{car}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>License</strong></Table.Cell>
                            <Table.Cell>{license}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Start mileage</strong></Table.Cell>
                            <Table.Cell>{startMileage} km</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>End mileage</strong></Table.Cell>
                            <Table.Cell>{endMileage !== null ? endMileage + " km" : "-"}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}