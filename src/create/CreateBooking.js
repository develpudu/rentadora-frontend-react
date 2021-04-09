import React, { Component } from 'react';
import { Header, Form, Button, Grid, Message, Divider } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import API, { handleError } from '../helpers/API';

export class CreateBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [],
            error: false,
            errorMessage: null,
            bookingComplete: false,
        }
    }

    handleChange = (e, data) => {
        const { name, value } = data;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { firstname, lastname, car, license, startmileage, date, hour, minute } = this.state;

        if (date === undefined) {
            this.setState({
                error: true,
                errorMessage: "Debes elegir una fecha.",
            });

            return;
        }

        let composedDate = `${date} ${hour}:${minute}`;

        if (new Date(composedDate) < new Date()) {
            this.setState({
                error: true,
                errorMessage: "La fecha y la hora no pueden quedar en el pasado.",
            });

            return;
        }

        const data = {
            firstname: firstname,
            lastname: lastname,
            car: car,
            license: license,
            startkm: startmileage,
            startdate: composedDate
        };

        API.post("/bookings", data)
            .then(response => {
                this.setState({
                    bookingComplete: true,
                    bookingid: response.data.id,
                });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errorMessage: handleError(error),
                })
            })
    }

    componentDidMount = () => {
        API.get("/cars")
            .then(response => {
                const cars = response.data.map(item => {
                    return {
                        key: item.id,
                        text: item.name,
                        value: item.id
                    };
                });

                this.setState({
                    cars: cars,
                    hour: 0,
                    minute: 0,
                });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errorMessage: handleError(error),
                })
            });
    };

    render() {
        const { cars, error, errorMessage, bookingComplete, bookingid } = this.state;

        const hours = [];

        for (let index = 0; index < 24; index++) {
            hours.push({
                key: index,
                text: index,
                value: index,
            })
        };

        const minutes = [
            { key: 1, text: "00", value: 0 },
            { key: 2, text: "15", value: 15 },
            { key: 3, text: "30", value: 30 },
            { key: 4, text: "45", value: 40 },
        ];

        if (bookingComplete)
            return (<Redirect push to={"/booking/" + bookingid} />)

        return (

            <Grid.Column width={10}>
                <Header as="h1" textAlign="center">Crear nueva reserva</Header>

                {error && <Message danger content={errorMessage} />}

                <Form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Form.Input placeholder="John" required name="firstname" label="Nombre" type="text" onChange={this.handleChange} />
                    <Form.Input placeholder="Doe" required name="lastname" label="Apellido" type="text" onChange={this.handleChange} />
                    <Form.Input placeholder="00000000" required name="license" label="Nro de licencia" type="text" onChange={this.handleChange} />

                    <Divider />

                    <Form.Select required name="car" label="Model" options={cars} placeholder="Seleccionar..." onChange={this.handleChange} />
                    <Form.Input placeholder="9999" required name="startmileage" label="Kilomentraje actual (km)" type="text" onChange={this.handleChange} />

                    <Divider />

                    <Form.Input required name="date" type="date" label="Date" onChange={this.handleChange} />
                    <Form.Group widths="equal">
                        <Form.Select label="Horas" required name="hour" options={hours} onChange={this.handleChange} />
                        <Form.Select label="Minutos" required name="minute" options={minutes} onChange={this.handleChange} />
                    </Form.Group>

                    <Button fluid primary type="submit">Crear</Button>
                </Form>
            </Grid.Column>
        );
    }
}