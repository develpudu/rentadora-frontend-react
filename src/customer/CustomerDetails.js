import React, { Fragment, Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class CustomerDetails extends Component {
    render() {
        const {
            firstName,
            lastName,
            bookings,
        } = this.props.customer;

        return (
            <Fragment>
                <Header as="h1">Bookings for {`${firstName} ${lastName}`}</Header>
                
                <List>
                    {bookings.map(item =>
                        <List.Item>
                            <Link to={"/booking/" + item.bookingId}>{item.bookingId}</Link>
                        </List.Item>
                    )}
                </List>
            </Fragment>
        );
    }
}