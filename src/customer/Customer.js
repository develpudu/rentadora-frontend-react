import React, { Component } from 'react';
import { Grid, Message, Loader } from 'semantic-ui-react';

import { CustomerDetails } from './CustomerDetails';
import API, { handleError } from '../helpers/API';

export class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            error: false,
            errorMessage: null,
            customer: {},
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;

        API.get("/api/customers/" + id)
            .then(response => {
                this.setState({
                    loaded: true,
                    customer: response.data,
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
        const { error, errorMessage, loaded, customer } = this.state;

        return (
            <Grid.Column textAlign="center">
                {error && <Message warning content={errorMessage} />}

                {!loaded && <Loader active inline="centered" />}

                {(loaded && !error) && <CustomerDetails customer={customer} />}
            </Grid.Column>
        );
    }
}