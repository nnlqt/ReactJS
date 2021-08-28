import {React, useEffect} from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { PublicRoute } from '../../hocs/PublicRoute';
import Chats from '../Chats';
import { News } from '../News';
import { NoChat } from '../NoChat';
import { Profile } from '../Profile';
import { Login } from "../Login";
import { connectProfileToFB } from "../../store/profile/actions";
import { Logout } from "../Logout";
import { useDispatch } from 'react-redux';

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(connectProfileToFB());
      }, []);

    return (
        <BrowserRouter>
            <ul>
                <li><Link to='/chats'>Chats</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/news'>News</Link></li>
            </ul>
            <Logout />

            <Switch>
                <PrivateRoute 
                    path='/profile' 
                    render={(data) => (
                        <Profile match={data.match} history={data.history} />
                )}>
                </PrivateRoute>
                <PrivateRoute exact 
                    path='/chats/:chatId?'>
                        <Chats />
                </PrivateRoute>
                <PublicRoute 
                    exact path='/news'>
                        <News />
                </PublicRoute>
                <PrivateRoute 
                    path="/nochat">
                        <NoChat />
                </PrivateRoute>
                <Route path='/' exact>
                    <h2>Welcome</h2>
                </Route>
                <PublicRoute 
                    path='/login' exact>
                        <Login />
                </PublicRoute>
                <PublicRoute 
                    path='/signup' exact>
                        <Login isSignUp />  
                </PublicRoute>
                <Route path='*'>
                    <h2>404 Page not found</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

