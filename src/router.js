import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';


import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Art from './components/Art/Art'
import Contact from './components/Contact/Contact'
import AdminConsole from './components/AdminConsole/AdminConsole'
import store from './store'


export default(
    <Provider store={store}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/shop" component={Shop} />
    <Route path="/art" component={Art} />
    <Route path="/contact" component={Contact} />
    <Route path="/adminconsole" component={AdminConsole} />
        
        </Switch>
    </Provider>
    )