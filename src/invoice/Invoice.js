import React, { Component } from 'react';

import API, { handleError } from '../helpers/API';
import { Grid, Message, Loader } from 'semantic-ui-react';
import { InvoiceDetails } from './InvoiceDetails';

export class Invoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: null,
            loaded: false,
            customer: {},
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;

        API.get("/api/invoices/" + id)
            .then(response => {
                this.setState({
                    loaded: true,
                    invoice: response.data,
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
        const { error, errorMessage, loaded, invoice } = this.state;

        return (
            <Grid.Column textAlign="center">
                {error && <Message warning content={errorMessage} />}

                {!loaded && <Loader active inline='centered' />}

                {(loaded && !error) && <InvoiceDetails invoice={invoice} />}
            </Grid.Column>
        );
    }
}