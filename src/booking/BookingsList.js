import React, { Fragment, Component } from 'react';
import { List, Table, TableHeader, TableHeaderCell, TableRow, TableBody, TableCell, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class BookingsList extends Component {
    render() {
        const { bookings } = this.props;

        return (
            <Fragment>
                <Header as="h1">Todas las reservas</Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Reserva</TableHeaderCell>
                            <TableHeaderCell>Cliente</TableHeaderCell>
                            <TableHeaderCell>Estado</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map(booking =>
                            <TableRow>
                                <TableCell><Link to={"/booking/" + booking.bookingid}>{booking.bookingid}</Link></TableCell>
                                <TableCell>
                                    <Link to={"/customer/" + booking.customerid}>
                                        {`${booking.firstname} ${booking.lastname}`}
                                    </Link>
                                </TableCell>
                                <TableCell>{booking.isopen === '0' && "Abierta"}{booking.isopen === '1' && "Cerrada"}</TableCell>
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