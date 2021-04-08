import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API, { handleError } from '../helpers/API';
import { Header, Grid, Message, Form, Button } from 'semantic-ui-react';

export class End extends Component {
    constructor(props) {
        super(props);

        const {id } = this.props.match.params;
        const bookingid = id !== undefined ? id : null;

        this.state = {
            error: false,
            errorMessage: false,
            bookingEnded: false,
            bookingid: bookingid,
            hour: 0,
            minute: 0,
        }
    }

    handleChange = (event, data) => {
        const { name, value } = data;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { bookingid, endmileage, date, hour, minute } = this.state;

        const composedDate = `${date} ${hour}:${minute}`;

        const data = {
            bookingid: bookingid,
            enddate: composedDate,
            endmileage: endmileage
        };

        API.put("/api/bookings", data)
            .then(results => {
                this.setState({
                    bookingEnded: true,
                });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errorMessage: handleError(error),
                });
            });
    }

    render() {
        const { error, errorMessage, bookingEnded, bookingid } = this.state;

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

        if (bookingEnded) 
            return(<Redirect push to={"/invoice/" + bookingid} />);

        return (
            <Grid.Column width={10}>
                <Header as="h1" textAlign="center">End booking</Header>

                {error && <Message warning content={errorMessage} />}

                <Form onSubmit={this.handleSubmit}>
                    <Form.Input required name="bookingid" value={bookingid} type="text" label="Booking Id" onChange={this.handleChange} />

                    <Form.Input required name="endmileage" type="text" label="Final mileage (km)" onChange={this.handleChange} />

                    <Form.Input required name="date" type="date" label="Date" onChange={this.handleChange} />

                    <Form.Group widths="equal">
                        <Form.Select label="Hour" required name="hour" options={hours} onChange={this.handleChange} />
                        <Form.Select label="Minute" required name="minute" options={minutes} onChange={this.handleChange} />
                    </Form.Group>

                    <Button fluid primary type="submit">Submit</Button>
                </Form>
            </Grid.Column>
        );
    }
}