import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../helpers/Authenticate';

class BaseUserAction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: Auth.isAuthenticated(),
        }
    }

    // toggle button state on re-render
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location)
            this.setState({ authenticated: Auth.isAuthenticated() });
    }

    logoutUser = () => {
        Auth.logOut();

        this.setState({
            authenticated: false,
        })
    }

    render() {
        const { authenticated } = this.state;

        if (authenticated)
            return (
                <Link to="/" onClick={this.logoutUser}>Cerrar sesión</Link>
            );
        else {
            return (
                <Fragment>
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
                </Fragment>
            );
        }
    }
}

const UserAction = withRouter(BaseUserAction);

export default UserAction;