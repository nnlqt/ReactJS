import {Message} from './Message.js';

import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, {props.name}
        </h1>
        <Message text={props.text} />
      </header>
    </div>
  );
}

export default App;
