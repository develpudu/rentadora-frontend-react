import React, { Fragment, Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class InvoiceDetails extends Component {
    render() {
        const {
            bookingid,
            startdate,
            enddate,
            totalkm,
            cost,
            car,
            license,
            firstname,
            lastname,
            customerId,
        } = this.props.invoice;

        return (
            <Fragment>
                <Header as="h1">Factura para {bookingid}</Header>
                
                <Header as="h2">Total : $ {cost}</Header>

                <Table striped>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><strong>Cliente</strong></Table.Cell>
                            <Table.Cell><Link to={"/customer/" + customerId}>{`${firstname} ${lastname}`}</Link></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Reserva</strong></Table.Cell>
                            <Table.Cell><Link to={"/booking/" + bookingid}>Click aqui</Link></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Inicio</strong></Table.Cell>
                            <Table.Cell>{new Date(startdate).toLocaleString("es-AR")}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Fin</strong></Table.Cell>
                            <Table.Cell>{enddate !== null ? new Date(enddate).toLocaleString("es-AR") : "-"}</Table.Cell>
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
                            <Table.Cell>{totalkm} km</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}