import React from 'react';
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

export const ChatList = ({ chats, onAddChat }) => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <List    
          style={{
          display: 'flex',
          flexDirection: "column-reverse",
          backgroundColor: '#0000000',
          justifyContent: 'flex-end',
          gap: '5px',
          width: '100%',
          padding: '2vh',
          }}> 
          {Object.values(chats).map((c) => <ChatItem name = {c.name} key={c.id} id={c.id} />)}
            <ListItem style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <AddChat onAddChat={onAddChat} />
            </ListItem>
        </List>
    </div>
  );
}
