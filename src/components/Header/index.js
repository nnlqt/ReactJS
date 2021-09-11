import React from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '../Logout';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import './style.css';
import { HeaderButton } from './HeaderButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { slide as Menu } from 'react-burger-menu';


export const Header = () => {
const mob = useMediaQuery("(max-width:600px)");
if (mob) {
        return (
            <header className='RouterMob'>
            <Menu left width={'100%'}>
              <Link to='/' className="menu-item">
                  <HeaderButton icon={<HomeTwoToneIcon />}text={'Home'} />
              </Link>
              <Link to='/chats' className="menu-item">
                  <HeaderButton icon={<ForumTwoToneIcon />}text={'Chats'} />
              </Link>
              <Link to='/profile' className="menu-item">
                  <HeaderButton icon={<AccountBoxTwoToneIcon />}text={'Profile'} />
              </Link>
              <Link to='/news' className="menu-item">
                  <HeaderButton icon={<ReceiptTwoToneIcon />}text={'News'} />
              </Link>
              <Link to='#' className="menu-item">
                  <HeaderButton icon={<BusinessCenterTwoToneIcon />}text={'Cases'} />
              </Link>
              <Logout />
            </Menu>
            </header>
          );
} else {
    return (
        <header className='Router center'>
                <ul className='Router__ul'>
                    <li className='Router__li'>
                        <Link to='/'>
                            <HeaderButton icon={<HomeTwoToneIcon />}text={'Home'} />
                        </Link>
                    </li>
                    <li className='Router__li'>
                        <Link to='/chats'>
                            <HeaderButton icon={<ForumTwoToneIcon />}text={'Chats'} />
                        </Link>
                    </li>
                    <li className='Router__li'>
                        <Link to='/profile'>
                            <HeaderButton icon={<AccountBoxTwoToneIcon />}text={'Profile'} />
                        </Link>
                    </li>
                    <li className='Router__li'>
                        <Link to='/news'>
                            <HeaderButton icon={<ReceiptTwoToneIcon />}text={'News'} />
                        </Link>
                    </li>
                    <li className='Router__li'>
                        <Link to='#'>
                            <HeaderButton icon={<BusinessCenterTwoToneIcon />}text={'Cases'} />
                        </Link>
                    </li>
                    <li className='Router__li'>
                        <Logout />
                    </li>
                </ul>
        </header>
        )
    }
}