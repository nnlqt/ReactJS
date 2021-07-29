import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MyButton } from './Button';
import { AUTHORS } from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function MyTextField({onSendMessage}) {
  const [value, setValue] = useState('');
  const [valueError, setValueError] = useState(false);
  
  const handleSubmit = (e) => {
      e.preventDefault();

      onSendMessage({
          author: AUTHORS.human,
          id: Date.now(),
          text: value,
      });

      if (value !== '') {
        setValueError(false)
        setValue('')
      } else {
        setValueError(true)
    }
  }

  const classes = useStyles();

  return (
    <form id='send' className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <TextField 
      autoFocus={true}
      onChange={(e) => setValue(e.target.value)}
      label="Enter your message"
      id="outlined-basic" 
      variant="outlined"
      style={{ 
        margin: '0'
      }}
      error={valueError}  />
      <MyButton />
    </form>
  );
}