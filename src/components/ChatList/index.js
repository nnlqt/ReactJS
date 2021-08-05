import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export function ChatList({ chats }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <List     
          style={{
          display: 'flex',
          flexDirection: "column",
          backgroundColor: '#8f8888',
          gap: '5px'
          }}> 
          {Object.values(chats).map((c) => (
            <ListItem
              style={{
                  backgroundColor: '#9f9999',
                  borderRadius: '10px',
                  gap: '5px',
                  minWidth: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
              }}
              button
              key={c.id}> 
                  <Link to={`/chats/${c.id}`}>{c.name}</Link>
            </ListItem>))} 
        </List>
    </div>    
  );
}
