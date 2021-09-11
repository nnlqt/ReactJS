import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const SendButton = () => {
  const classes = useStyles();

  const mob = useMediaQuery("(max-width:800px)");
  if (mob) {
  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        form='send'
        type='submit'
        size='small'
        style={{  
        fontSize: '12px', 
        borderRadius: '0 25px 25px 0', 
        widht: '10ch',
        margin: '0',
        }}
      />
  );
} else {
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<Icon>send</Icon>}
      form='send'
      type='submit'
      size='small'
      style={{  
      fontSize: '16px', 
      borderRadius: '0 25px 25px 0', 
      widht: '20ch',
      margin: '0',
      }}
    >
      Send
    </Button>
);
}
}