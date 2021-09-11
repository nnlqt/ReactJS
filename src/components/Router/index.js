import {React, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Profile } from '../Profile';
import Chats from '../Chats';
import { News } from '../News';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { PublicRoute } from '../../hocs/PublicRoute';
import { Login } from "../Login";
import { NoChat } from '../NoChat';
import { connectProfileToFB } from "../../store/profile/actions";
import { WelcomePage } from '../WelcomePage';

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(connectProfileToFB());
      }, []);

    return (
        <BrowserRouter>

            <Switch>
                <PrivateRoute 
                    path='/profile' 
                    render={(data) => (
                        <Profile match={data.match} history={data.history} />
                )}>
                </PrivateRoute>
                <PrivateRoute  
                    path='/chats/:chatId?'>
                        <Chats />
                </PrivateRoute>
                <Route 
                    path='/news'>
                        <News />
                </Route>
                <PrivateRoute 
                    path="/nochat">
                        <NoChat />
                </PrivateRoute>
                <Route path='/' exact>
                    <WelcomePage />
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

