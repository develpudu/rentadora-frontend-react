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
                <Header as="h1">Reserva: {bookingid}</Header>

                <Table striped>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><strong>Cliente</strong></Table.Cell>
                            <Table.Cell><Link to={"/customer/" + customerid}>{`${firstname} ${lastname}`}</Link></Table.Cell>
                        </Table.Row>

                        {isopen === '1' &&
                            <Table.Row>
                            <Table.Cell><strong>Factura</strong></Table.Cell>
                            <Table.Cell><Link to={"/invoice/" + bookingid}>Click aqui</Link></Table.Cell>
                            </Table.Row>
                        }

                        {isopen === '0' &&
                            <Table.Row>
                            <Table.Cell><strong>Finalizar reserva</strong></Table.Cell>
                            <Table.Cell><Link to={"/end/" + bookingid}>Click aqui</Link></Table.Cell>
                            </Table.Row>
                        }

                        <Table.Row>
                            <Table.Cell><strong>Inicio</strong></Table.Cell>
                            <Table.Cell>{new Date(startdate).toLocaleString("es-AR")}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Final</strong></Table.Cell>
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
                            <Table.Cell><strong>Kilometraje inicial</strong></Table.Cell>
                            <Table.Cell>{startkm} km</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><strong>Kilometraje final</strong></Table.Cell>
                            <Table.Cell>{endkm !== null ? endkm + " km" : "-"}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Fragment>
        );
    }
}