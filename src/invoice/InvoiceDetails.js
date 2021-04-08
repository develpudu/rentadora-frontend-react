import React, { Fragment, Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class InvoiceDetails extends Component {
    render() {
        const {
            bookingId,
            startDate,
            endDate,
            totalMileage,
            cost,
            car,
            license,
            firstName,
            lastName,
            customerId,
        } = this.props.invoice;

        return (
            <Fragment>
                <Header as="h1">Invoice for {bookingId}</Header>
                
                <Header as="h2">Total cost: {cost} SEK</Header>

                <Table striped>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><strong>Customer</strong></Table.Cell>
                            <Table.Cell><Link to={"/customer/" + customerId}>{`${firstName} ${lastName}`}</Link></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Booking</strong></Table.Cell>
                            <Table.Cell><Link to={"/booking/" + bookingId}>Click here</Link></Table.Cell>
                        </Table.Row>
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
                            <Table.Cell><strong>Total mileage</strong></Table.Cell>
                            <Table.Cell>{totalMileage} km</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}