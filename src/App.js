import './App.css';
import { useCallback, useState, useEffect } from 'react';
import { MessageBord } from './components/MessageBord/MessageBord.js';
import { Form } from './components/Form/Form.js';
import { AUTHORS } from './constants';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, [messages]);

  useEffect(() => {
    if(!messages.length || messages[messages.length -1].author === AUTHORS.robot){
      return
    }
    const timeout = setTimeout(()=>{
    const newMessage = {
      text: 'message sent',
      author: AUTHORS.robot,
      id: Date.now(),
    }
    setMessages([...messages, newMessage])
  }, 500);
  return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to MyChat
        </h1>
      </header> 
      <section className="App-bord">
        <MessageBord messages={messages} />
        <Form onSendMessage={handleSendMessage} />
      </section>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
