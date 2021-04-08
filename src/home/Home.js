import React from 'react';
import { Header, Grid } from "semantic-ui-react";

export default function Home() {
    return (
        <Grid.Column textAlign="center">
            <Header as="h1">Bienvenido!</Header>
            
            <p>Utilice el menú para comenzar.</p>
        </Grid.Column>
    );
}