import React, { Component } from 'react';
import { Login } from './login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Grid } from 'semantic-ui-react';

import ProtectedRoute from './shared/ProtectedRoute';
import { Create } from './create/Create';
import { NavHeader } from './header/NavHeader';
import { Booking } from './booking/Booking';
import { Customer } from './customer/Customer';
import { Invoice } from './invoice/Invoice';
import { Bookings } from './booking/Bookings';
import { Customers } from './customer/Customers';
import Home from './home/Home';
import { End } from './end/End';

class App extends Component {
  render() {
    return (
      <Router>
        <Container text>
          <Route path="/" component={NavHeader} />
          <Grid>
            <Grid.Row centered>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/create" component={Create} />
              <ProtectedRoute path="/end/:id?" component={End} />
              <ProtectedRoute path="/booking/:id" component={Booking} />
              <ProtectedRoute path="/bookings" component={Bookings} />
              <ProtectedRoute path="/customer/:id" component={Customer} />
              <ProtectedRoute path="/customers" component={Customers} />
              <ProtectedRoute path="/invoice/:id" component={Invoice} />
            </Grid.Row>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default App;