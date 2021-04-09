import React, { Fragment, Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class InvoicesList extends Component {
    render() {
        const { invoices } = this.props;

        return (
            <Fragment>
                <Header as="h1">Todas las facturas</Header>

                <List>
                    {invoices.map(invoice =>
                        <List.Item>
                            <Link to={"/invoice/" + invoice.bookingid}>
                                {`${invoice.firstname} ${invoice.lastname}`}
                            </Link>
                        </List.Item>
                    )}
                </List>
            </Fragment>
        );
    }
}