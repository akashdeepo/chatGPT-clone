import logo from './logo.svg';
import './App.css';
import './normal.css';
import React,{useState, useEffect} from 'react';

function App() {

  useEffect(() => {
    getEngines();
  }, [])

  const ChatMessage = ({message}) => {
    return (
      <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
          <div className="chat-message-center">
            <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
            
            </div>
            <div className="message">
              {message.message}
            </div>
          </div>
        </div>
    )
  }


// add state for input and chatlog
  const [input, setInput] = useState('');
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState('ada');
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Hello, I am GPT-3. Ask me anything."
  },{
    user: "me",
    message: "I want to use chatgpt for my homework."
  }]);

  //clear chats
  function clearChat() {
    setChatLog([]);
  }

  function getEngines() {
    fetch('http://localhost:3080/models')
    .then(res => res.json())
    .then(data => {
      console.log(data.models.data)
      setModels(data.models.data)
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, {user:"me", message: `${input}`}]
    setInput("");
    setChatLog(chatLogNew)


    const messages = chatLogNew.map((message) => message.message).join("\n");

    const response = await fetch('http://localhost:3080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          message: messages,
          currentModel,
        })
      });
    const data = await response.json();
    setChatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}]);
  }

  return (
    <div className="App">
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
      {/* <div className='models'>  ------------TODO----White screen if uncommented----
        <select>
          {models.map((model, index) => (
            <option key={model.id} value={model.id}>{model.id}</option>
          ))}
        </select>
        
      </div>  */}
    </aside>
    <section className="chatbox">
    <div className="chat-log">
      {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      
    </div>
      <div 
      className="chat-input-holder">
      <form onSubmit={handleSubmit}>  
        <input 
        rows="1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="chat-input-textarea"></input>
      </form>

      </div>


    </section>
    </div>
  );
}



export default App;
