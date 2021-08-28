import React from 'react';
import { useSelector } from 'react-redux';
import { AUTHORS } from '../../constants';
import { selectName } from '../../store/profile/selectors';

export const Message = ({text, author}) => {
  const name = useSelector(selectName);

  return (
  <div style={{
    borderRadius: '10px',
    padding: '5px',
    gap: '5px'
}}>
    {author === AUTHORS.human ? name : author}: {text}
  </div>
  )
};
