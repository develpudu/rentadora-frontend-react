import React, { Fragment, Component } from 'react';
import { Table, TableHeader, TableHeaderCell, TableRow, TableBody, TableCell, Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class CustomerDetails extends Component {
    render() {
        const {
            firstname,
            lastname,
            bookings,
        } = this.props.customer;

        return (
            <Fragment>
                <Header as="h1">Reservas para {`${firstname} ${lastname}`}</Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Codigo de reserva</TableHeaderCell>
                            <TableHeaderCell>Estado</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map(booking =>
                            <TableRow>
                                <TableCell><Link to={"/booking/" + booking.bookingid}>{booking.bookingid}</Link></TableCell>
                                <TableCell>{booking.isopen === '1' && "Abierta"}{booking.isopen === '0' && "Cerrada"}</TableCell>
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