import React from 'react';

export const Message = ({text, author}) => {
  return (
  <div style={{
    backgroundColor: '#9f9999',
    borderRadius: '10px',
    padding: '5px',
    gap: '5px'
}}>
    {author}: {text}
  </div>
  )
};
