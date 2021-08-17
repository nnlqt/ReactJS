import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function MyButton() {
  const classes = useStyles();

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        form='send'
        type='submit'
        style={{  
        fontSize: '16px', 
        borderRadius: '0 25px 25px 0', 
        padding: '14px 38px',
        margin: '0'
        }}
      >
        Send
      </Button>
  );
}