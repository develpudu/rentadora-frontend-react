import React, { Component } from 'react';
import { Grid, Message, Loader } from 'semantic-ui-react';

import API, { handleError } from '../helpers/API';
import { CustomersList } from './CustomersList';

export class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: null,
            loaded: false,
            customers: [],
        }
    }

    componentDidMount = () => {
        API.get("/api/customers")
            .then(response => {
                this.setState({
                    loaded: true,
                    customers: response.data,
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
        const { error, errorMessage, loaded, customers } = this.state;

        return (
            <Grid.Column textAlign="center">
                {error && <Message warning content={errorMessage}/> }

                {!loaded && <Loader active inline="centered" /> }

                {(loaded && !error) && <CustomersList customers={customers} />}
            </Grid.Column>
        );
    }
}