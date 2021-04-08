import React, { Fragment, Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class BookingDetails extends Component {
    render() {
        const {
            bookingid,
            customerid,
            license,
            startdate,
            enddate,
            startkm,
            endkm,
            isopen,
            car,
            firstname,
            lastname,
        } = this.props.booking;

        return (
            <Fragment>
                <Header as="h1">{bookingid}</Header>

                <Table striped>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><strong>Customer</strong></Table.Cell>
                            <Table.Cell><Link to={"/customer/" + customerid}>{`${firstname} ${lastname}`}</Link></Table.Cell>
                        </Table.Row>

                        {!isopen &&
                            <Table.Row>
                                <Table.Cell><strong>Invoice</strong></Table.Cell>
                            <Table.Cell><Link to={"/invoice/" + bookingid}>Click here</Link></Table.Cell>
                            </Table.Row>
                        }

                        {isopen &&
                            <Table.Row>
                                <Table.Cell><strong>End booking</strong></Table.Cell>
                            <Table.Cell><Link to={"/end/" + bookingid}>Click here</Link></Table.Cell>
                            </Table.Row>
                        }

                        <Table.Row>
                            <Table.Cell><strong>Start</strong></Table.Cell>
                            <Table.Cell>{new Date(startdate).toLocaleString("es-AR")}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>End</strong></Table.Cell>
                            <Table.Cell>{enddate !== null ? new Date(enddate).toLocaleString("es-AR") : "-"}</Table.Cell>
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
                            <Table.Cell>{startkm} km</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>End mileage</strong></Table.Cell>
                            <Table.Cell>{endkm !== null ? endkm + " km" : "-"}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}