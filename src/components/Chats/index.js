import './Chats.css';
import firebase from 'firebase';
import { useCallback, useEffect } from 'react';
import { MessageBord } from '../MessageBord/MessageBord.js';
import { MyTextField } from '../TextField';
import { ChatList } from '../ChatList';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectName } from '../../store/profile/selectors';
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { connectChatsToFB } from "../../store/chats/actions";
import { connectMessagesToFB, sendMessageWithFB } from "../../store/messages/actions";


function Chats() {
  const db = firebase.database();
  const { chatId } = useParams();

  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const name = useSelector(selectName);

  useEffect(() => {
    dispatch(connectChatsToFB());
    dispatch(connectMessagesToFB());
  }, []);

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithFB(chatId, { ...newMessage, author: name }));
    },
    [chatId, name, dispatch]
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to #MyChat
        </h1>
      </header>
      <section className='App-page'>
      <ChatList chats={chats} />
      {!!chatId && (<main className="App-bord">
        <MessageBord messages={messages[chatId] || []} />
        <MyTextField onSendMessage={handleSendMessage} />
      </main>)}
      </section> 
      <footer className="App-footer"></footer>
    </div>
  );
}

export default Chats;
