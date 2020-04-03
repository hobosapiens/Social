import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state} />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={ () => <Profile store={props.store} />} />
                <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} />} />
                <Route path='/news' render={News} />
                <Route path='/music' render={Music} />
                <Route path='/settings' render={Settings} />
            </div>
            <Footer/>
        </div>
    );
};

export default App;
