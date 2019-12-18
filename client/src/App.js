import React from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import Join from './componets/Join/Join';
import Chat from './componets/Chat/Chat'
import Home from './componets/Home/Home'
import Signup from './componets/NewUser/NewUser'
const App = () => {
    return (
        <Router>
            <Route path ="/" exact component = {Home} />
            <Route path ="/join" component = {Join} />
            <Route path ="/signup" component = {Signup} />
            <Route path ="/chat" component = {Chat} />
        </Router>
        
    );
}

export default App;