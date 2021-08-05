import './Chats.css';
import { useCallback, useState, useEffect } from 'react';
import { MessageBord } from '../MessageBord/MessageBord.js';
import { AUTHORS } from '../../constants';
import { MyTextField } from '../TextField';
import { ChatList } from '../ChatList';
import { useParams, } from 'react-router-dom';

const initialChats = {
  chat1: {
    messages: [{ text: 'Hello', author: AUTHORS.human, id: 'chat1-1'}],
    name: 'Chat 1',
    id: 'chat1'
  },
  chat2: {
    messages: [{ text: 'Hi', author: AUTHORS.human, id: 'chat2-1'}],
    name: 'Chat 2',
    id: 'chat2'
  },
    chat3: {
    messages: [],
    name: 'Chat 3',
    id: 'chat3'},
}

function Chats() {
  const { chatId } = useParams();

  const [chats, setChats] = useState(initialChats);


  const handleSendMessage = useCallback(
    (newMessage) => {
      setChats ({
        ...chats,
      [chatId]: {
        ...chats[chatId],
        messages: [...chats[chatId].messages, newMessage]}
      });
    },
  [chats, chatId]
  );

  useEffect(() => {
    if(
      !chatId || 
      !chats[chatId]?.messages.length || 
      chats[chatId].messages[chats[chatId].messages.length -1].author === AUTHORS.robot
    ) {
      return
    }

    const timeout = setTimeout(()=>{
    const newMessage = {
      text: 'message sent',
      author: AUTHORS.robot,
      id: Date.now(),
    };
    handleSendMessage(newMessage)
  }, 500);
  return () => clearTimeout(timeout);
  }, [chats]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to #MyChat
        </h1>
      </header>
      <section className='App-page'>
      <ChatList chats={chats} />
      {chats[chatId] !== ChatList.id ? chatId && <main className="App-bord">
        <MessageBord messages={chats[chatId].messages} />
        <MyTextField onSendMessage={handleSendMessage} />
      </main> : <p>Please select a chat</p>}
      </section> 
      {/*Не знаю, корректен ли такой вариант, или нужно использовать редирект */}
      <footer className="App-footer"></footer>
    </div>
  );
}

export default Chats;
