import React, { Fragment, Component } from 'react';
import { Card, Image, Table, TableHeader, TableHeaderCell, TableRow, TableBody, TableCell, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class CustomerDetails extends Component {
    render() {
        const {
            firstname,
            lastname,
            license,
            address,
            img,
            bookings,
        } = this.props.customer;

        return (
            <Fragment>
                <Card centered>
                    <Image src={'/uploads/' + img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{`${firstname} ${lastname}`}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Nro de licencia: {`${license}`}</span>
                        </Card.Meta>
                        <Card.Description>
                            Direccion: {address}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
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
                    </Card.Content>
                </Card>
            </Fragment>
        );
    }
}