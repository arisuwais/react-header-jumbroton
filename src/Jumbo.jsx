import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class jumbo extends React.Component {



    render() {
        return (
            <Jumbotron>
                <h1 className="display-3">Selamat Di Rubicamp </h1>
                <p>Tempat belajar coding paling asyik dan menyenangkan!</p>
                <p className="lead">
                    <Button color="primary">Mulai Coding</Button>
                </p>
            </Jumbotron>
        )

    }
}