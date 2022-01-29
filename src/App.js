import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Chat';
import Chats from './Chats';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/chats/:id' element={<Chat/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
