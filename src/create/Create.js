import React, { Component } from 'react';
import { Header, Form, Button, Grid, Message, Divider } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import API, { handleError } from '../helpers/API';

export class Create extends Component {
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

        const { firstname, lastname, ssn, car, license, startmileage, date, hour, minute } = this.state;

        if (date === undefined) {
            this.setState({
                error: true,
                errorMessage: "You must pick a date.",
            });

            return;
        }

        let composedDate = `${date} ${hour}:${minute}`;

        if (new Date(composedDate) < new Date()) {
            this.setState({
                error: true,
                errorMessage: "Date and time can't be in the past.",
            });

            return;
        }

        const data = {
            firstname: firstname,
            lastname: lastname,
            ssn: ssn.replace("-", ""),
            car: car,
            license: license,
            startmileage: startmileage,
            startdate: composedDate
        };

        API.post("/bookings", data)
            .then(response => {
                this.setState({
                    bookingComplete: true,
                    bookingId: response.data.id,
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
        const { cars, error, errorMessage, bookingComplete, bookingId } = this.state;

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
            return (<Redirect push to={"/booking/" + bookingId} />)

        return (

            <Grid.Column width={10}>
                <Header as="h1" textAlign="center">Create new booking</Header>

                {error && <Message danger content={errorMessage} />}

                <Form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Form.Input placeholder="John" required name="firstname" label="First name" type="text" onChange={this.handleChange} />
                    <Form.Input placeholder="Doe" required name="lastname" label="Last name" type="text" onChange={this.handleChange} />
                    <Form.Input placeholder="YYMMDD-XXXX" required name="ssn" label="SSN" type="text" onChange={this.handleChange} />

                    <Divider />

                    <Form.Select required name="car" label="Model" options={cars} placeholder="Select..." onChange={this.handleChange} />
                    <Form.Input placeholder="ABC123" required name="license" label="License number" type="text" onChange={this.handleChange} />
                    <Form.Input placeholder="9999" required name="startmileage" label="Current mileage (km)" type="text" onChange={this.handleChange} />

                    <Divider />

                    <Form.Input required name="date" type="date" label="Date" onChange={this.handleChange} />
                    <Form.Group widths="equal">
                        <Form.Select label="Hour" required name="hour" options={hours} onChange={this.handleChange} />
                        <Form.Select label="Minute" required name="minute" options={minutes} onChange={this.handleChange} />
                    </Form.Group>

                    <Button fluid primary type="submit">Create</Button>
                </Form>
            </Grid.Column>
        );
    }
}