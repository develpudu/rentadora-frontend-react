import React, { Component } from 'react';
import { Grid, Message, Loader } from 'semantic-ui-react';

import API, { handleError } from '../helpers/API';
import { BookingsList } from './BookingsList';

export class Bookings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: null,
            loaded: false,
            bookings: [],
        }
    }

    componentDidMount = () => {
        API.get("/api/bookings")
            .then(response => {
                this.setState({
                    loaded: true,
                    bookings: response.data,
                })
            })
            .catch(error => {
                this.setState({
                    loaded: true,
                    error: true,
                    errorMessage: handleError(error),
                })
            })
    }

    render() {
        const { error, errorMessage, loaded, bookings } = this.state;

        return (
            <Grid.Column textAlign="center">
                {error && <Message warning content={errorMessage} />}

                {!loaded && <Loader active inline="centered" />}

                {loaded && <BookingsList bookings={bookings} />}
            </Grid.Column>
        );
    }
}