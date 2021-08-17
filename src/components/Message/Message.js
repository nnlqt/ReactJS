import React, { useContext } from 'react';
import { ThemeContext } from '../Utils/ThemeContext';

export const Message = ({text, author}) => {
  const theme = useContext(ThemeContext)

  return (
  <div style={{
    backgroundColor: theme.theme,
    borderRadius: '10px',
    padding: '5px',
    gap: '5px'
}}>
    {author}: {text}
  </div>
  )
};
