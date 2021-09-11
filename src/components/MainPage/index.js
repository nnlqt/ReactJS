import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import './style.css';

export const MainPage = () => {
    return (
        <main className='MainPage center'>
            <p className='MainPage__header'>#NonLiquet</p>
            <div className='MainPage__tags'>
            <a className='MainPage__links' href='https://t.me/nnlqt' target="_blank"><TelegramIcon style={{width: '8vw', height: '8vh'}} color='primary' /></a>
            <a className='MainPage__links' href='https://www.instagram.com/nn.lqt/' target="_blank"><InstagramIcon style={{width: '8vw', height: '8vh'}} color='primary' /></a>
            <a className='MainPage__links' href='#' target="_blank"><LinkedInIcon style={{width: '8vw', height: '8vh'}} color='primary' /></a>
            </div>
        </main>
    )
}