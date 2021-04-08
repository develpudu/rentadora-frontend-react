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
                <Header as="h1">Factura para {bookingId}</Header>
                
                <Header as="h2">Total : $ {cost}</Header>

                <Table striped>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><strong>Cliente</strong></Table.Cell>
                            <Table.Cell><Link to={"/customer/" + customerId}>{`${firstName} ${lastName}`}</Link></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Reserva</strong></Table.Cell>
                            <Table.Cell><Link to={"/booking/" + bookingId}>Click aqui</Link></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Inicio</strong></Table.Cell>
                            <Table.Cell>{new Date(startDate).toLocaleString("es-AR")}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Fin</strong></Table.Cell>
                            <Table.Cell>{endDate !== null ? new Date(endDate).toLocaleString("es-AR") : "-"}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Auto</strong></Table.Cell>
                            <Table.Cell>{car}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Licencia</strong></Table.Cell>
                            <Table.Cell>{license}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Kilometraje final</strong></Table.Cell>
                            <Table.Cell>{totalMileage} km</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}