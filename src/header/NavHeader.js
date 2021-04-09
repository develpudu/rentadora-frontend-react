import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import UserAction from '../shared/UserAction';

export class NavHeader extends Component {
    render() {
        return (
            <Menu inverted size="large">
                <Menu.Item header>
                    <Link to="/">
                    <Icon name="car" />
                    Admin Rentadora
                    </Link>
                </Menu.Item>
                <Dropdown item text="Reservas">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/create">Crear nueva reserva</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/end">Finalizar reserva</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/bookings">Todas las reservas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Link to="/customers">Clientes</Link>
                </Menu.Item>
                <Dropdown item text="Autos">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/carcreate">Agregar un nuevo auto</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/carslist">Todos los autos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Link to="/invoices">Facturas</Link>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <UserAction />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}