import React from "react";
import { useDispatch } from "react-redux";
import { logoutWithFB } from "../../store/profile/actions";
import { HeaderButton } from "../Header/HeaderButton";
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';


export const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutWithFB());
  };

  return <HeaderButton onClick={handleClick}
  icon={<ExitToAppTwoToneIcon />}text={'Logout'}
  ></HeaderButton>;
};