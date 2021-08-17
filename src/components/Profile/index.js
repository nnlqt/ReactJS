import React from 'react';
import { PROFILE_TOGGLE_SHOW } from '../../store/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBox } from '@material-ui/icons';

export const Profile = () => {
    const profileState = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_TOGGLE_SHOW
        });
    }
    console.log(profileState)
    return (
    <>
    <h2>This is profile</h2>
    <input type='checkbox' onChange={toggleShow}/>
    {profileState.show && <div>This depends on golbal redux state</div>}
    </>
    )
}