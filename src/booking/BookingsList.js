import React, { Fragment, Component } from 'react';
import { List, Table, TableHeader, TableHeaderCell, TableRow, TableBody, TableCell, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class BookingsList extends Component {
    render() {
        const { bookings } = this.props;

        return (
            <Fragment>
                <Header as="h1">All bookings</Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Booking Id</TableHeaderCell>
                            <TableHeaderCell>Customer</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map(booking =>
                            <TableRow>
                                <TableCell><Link to={"/booking/" + booking.bookingId}>{booking.bookingId}</Link></TableCell>
                                <TableCell>
                                    <Link to={"/customer/" + booking.customerId}>
                                        {`${booking.firstName} ${booking.lastName}`}
                                    </Link>
                                </TableCell>
                                <TableCell>{booking.isOpen ? "Open" : "Closed"}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <List>
                    {bookings.map(booking =>
                        <List.Item>

                        </List.Item>
                    )}
                </List>
            </Fragment>
        );
    }
}