import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AddChat } from './AddChat';
import { ChatItem } from './ChatItem';

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

export const ChatList = ({ chats, onDeleteChat, onAddChat}) => {

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
          <button>Color</button>
          {Object.values(chats).map((c) => <ChatItem name = {c.name} key={c.id} id={c.id} onDelete={onDeleteChat} />)}
            <ListItem><AddChat onAddChat={onAddChat} /></ListItem>
        </List>
    </div>
  );
}
