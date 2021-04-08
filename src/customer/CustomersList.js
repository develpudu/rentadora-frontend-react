import React, { Fragment, Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class CustomersList extends Component {
    render() {
        const { customers } = this.props;

        return (
            <Fragment>
                <Header as="h1">All customers</Header>

                <List>
                    {customers.map(customer =>
                        <List.Item>
                            <Link to={"/customer/" + customer.id}>
                                {`${customer.firstName} ${customer.lastName}`}
                            </Link>
                        </List.Item>
                    )}
                </List>
            </Fragment>
        );
    }
}