import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AUTHORS } from '../../constants';
import { selectName } from '../../store/profile/selectors';
import { ThemeContext } from '../Utils/ThemeContext';

export const Message = ({text, author}) => {
  const theme = useContext(ThemeContext);
  const name = useSelector(selectName);

  return (
  <div style={{
    backgroundColor: theme.theme,
    borderRadius: '10px',
    padding: '5px',
    gap: '5px'
}}>
    {author === AUTHORS.human ? name : author}: {text}
  </div>
  )
};
