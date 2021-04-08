import React, { Component } from 'react';
import { Message, Grid, Loader } from 'semantic-ui-react';

import { BookingDetails } from './BookingDetails';
import API, { handleError } from '../helpers/API';

export class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: null,
            loaded: false,
            booking: {},
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;

        API.get("/api/bookings/" + id)
            .then(response => {
                this.setState({
                    loaded: true,
                    booking: response.data,
                });
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
        const { error, errorMessage, loaded } = this.state;

        return (
            <Grid.Column textAlign="center">
                {error && <Message warning content={errorMessage} />}

                {!loaded && <Loader active inline="centered" />}

                {(loaded && !error) && <BookingDetails booking={this.state.booking} />}
            </Grid.Column>
        );
    }
}