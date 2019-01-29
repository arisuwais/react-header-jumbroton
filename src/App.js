import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Jumbo from './Jumbo';
// import Button from '@material-ui/core/Button';
import Child from './Child';
import { Button } from 'reactstrap';


class App extends Component {
  constructor() {
    super()
    this.state = { texts: [], color: '' }
  }

  ComponentDidMount() {
    this.setState({ texts: ['Belajar Reactjs', 'sungguh menyenangkan'], color: 'green' })
  }




  render() {

    let texts = this.state.texts.map((text) => {
      return (
        <Child text={text} />
      )
    })

    let style = { color: this.state.color }

    return (
      <div class='container'>
        <br />
        <div className="App">
          <Header />
          <Jumbo />
          <div style={style}>
            {texts}
          </div>
          <Button color="primary" variant="raised" color="secondary">
            Default
         </Button>
        </div>
      </div>
    );
  }
}

export default App;
