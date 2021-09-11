import React from "react";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import { AUTHORS } from "../../constants";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Message = ({text, author}) => {
  const name = useSelector(selectName);

  const mob = useMediaQuery("(max-width:800px)");
  if (mob) {
  return (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '5px',
    gap: '3px',
    color: '#eee',
    wordWrap: 'break-word',
    backgroundColor: 'rgb(53 53 53)',
    fontSize: '12px',
}}>
    {author === AUTHORS.human ? name : author}: {text}
  </div>
  )
} else {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      padding: '5px',
      gap: '6px',
      color: '#eee',
      wordWrap: 'break-word',
      backgroundColor: 'rgb(53 53 53)',
      fontSize: '17px',
  }}>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
    )
}
};
