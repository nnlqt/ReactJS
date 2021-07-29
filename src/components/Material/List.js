import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export function MyList(list) {
  const classes = useStyles();

  const menuItems = [
      {
          text: 'Dialog',
          icon: 'Any1',
          path: '1'
      },
      {
        text: 'Dialog',
        icon: 'Any2',
        path: '2'
      },
      {
        text: 'Dialog',
        icon: 'Any3',
        path: '3'
     },
     {
        text: 'Dialog',
        icon: 'Any4',
        path: '4'
     }
  ]
  return (
    <div className={classes.root}>
        <List     
        style={{
        display: 'flex',
        flexDirection: "column",
        backgroundColor: '#8f8888',
        gap: '5px'
        }}> 
        {menuItems.map(item => (
        <ListItem
        style={{
            backgroundColor: '#9f9999',
            borderRadius: '10px',
            gap: '5px'
        }}
        button
        key={item.text}> 
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>))} 
        </List>
    </div>    
  );
}
