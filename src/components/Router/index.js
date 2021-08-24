import {React, useState} from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Chats from '../Chats';
import { NoChat } from '../NoChat';
import { Profile } from '../Profile';
import { ThemeContext } from '../Utils/ThemeContext';

export const Router = () => {
    const [bgColor, setBgColor] = useState('white')
    const changeColor = () => {
        setBgColor((prevColor) => (prevColor === 'white' ? 'gray' : 'white'));
    };
    return (
        <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor}}>
        <BrowserRouter>
            <ul>
                <li style={{ backgroundColor: bgColor }} ><Link to='/chats'>Chats</Link></li>
                <li style={{ backgroundColor: bgColor }} ><Link to='/profile'>Profile</Link></li>
            </ul>

            <Switch>
                <Route path='/' exact>
                    <h2>Welcome</h2>
                </Route>
                <Route exact path='/chats/:chatId?'>
                    <Chats />
                </Route>
                <Route path='/profile' exact>
                    <Profile />
                </Route>
                <Route path="/nochat">
                    <NoChat />
                </Route>
                <Route path='*'>
                    <h2>404 Page not found</h2>
                </Route>
            </Switch>
        </BrowserRouter>
        </ThemeContext.Provider>
    )
}

