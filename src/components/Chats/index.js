import './style.css';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyTextField } from '../TextField';
import { MessageBord } from '../MessageBord/MessageBord.js';
import { ChatList } from '../ChatList';
import { selectName } from '../../store/profile/selectors';
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { connectChatsToFB } from "../../store/chats/actions";
import { connectMessagesToFB, sendMessageWithFB } from "../../store/messages/actions";
import { Header } from '../Header';
import { Footer } from '../Footer';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Chats() {
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

  const mob = useMediaQuery("(max-width:600px)");
  if (mob) {
  return (
    <>
      <Header />
      <section className='Chats__page center'>
      <div className='Chats__box'>
      {!chatId ? <ChatList chats={chats} /> : (<main className="Chats__bord">
        <MessageBord  messages={messages[chatId] || []} />
        <MyTextField onSendMessage={handleSendMessage} />
      </main>)} 
      </div> 
      </section>
      <Footer />
    </>
  );
  } else {
    return (
      <>
        <Header />
        <section className='Chats__page center'>
        <div className='Chats__box'>
        <ChatList chats={chats} />
        {!!chatId && (<main className="Chats__bord">
          <MessageBord  messages={messages[chatId] || []} />
          <MyTextField onSendMessage={handleSendMessage} />
        </main>)}
        </div> 
        </section>
        <Footer />
      </>
    );
  }
}

export default Chats;
