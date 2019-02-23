import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path='/login'/>
                <Route exact path='/login'/>
                </Switch>
            </div>
        );
    }
}

export default App;

