import './Chats.css';
import { useCallback } from 'react';
import { MessageBord } from '../MessageBord/MessageBord.js';
import { MyTextField } from '../TextField';
import { ChatList } from '../ChatList';
import { useHistory, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, sendMessageWithReply } from '../../store/chats/actions';
import { selectName } from '../../store/profile/selectors';

function Chats() {
  const { chatId } = useParams();
  const history = useHistory();


  const chats = useSelector(state => state.chats);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithReply(chatId, {...newMessage, author: name}));
    },
  [chatId]
  );

    const handleDeleteChat = useCallback((id) => {
      dispatch(deleteChat(id));
    }, {});

    if (!!chatId && !chats[chatId]) {
      history.replace('/nochat')
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to #MyChat
        </h1>
      </header>
      <section className='App-page'>
      <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
      {chats[chatId] !== ChatList.id ? chatId && <main className="App-bord">
        <MessageBord messages={chats[chatId].messages} />
        <MyTextField onSendMessage={handleSendMessage} />
      </main> : <p>Please select or create a chat</p>}
      </section> 
      <footer className="App-footer"></footer>
    </div>
  );
}

export default Chats;
