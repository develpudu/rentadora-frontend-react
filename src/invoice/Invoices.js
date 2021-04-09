import React, { Component } from 'react';
import { Grid, Message, Loader } from 'semantic-ui-react';

import API, { handleError } from '../helpers/API';
import { InvoicesList } from './InvoicesList';

export class Invoices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: null,
            loaded: false,
            invoices: [],
        }
    }

    componentDidMount = () => {
        API.get("/invoices")
            .then(response => {
                this.setState({
                    loaded: true,
                    invoices: response.data,
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
        const { error, errorMessage, loaded, invoices } = this.state;

        return (
            <Grid.Column textAlign="center">
                {error && <Message warning content={errorMessage} />}

                {!loaded && <Loader active inline="centered" />}

                {(loaded && !error) && <InvoicesList invoices={invoices} />}
            </Grid.Column>
        );
    }
}