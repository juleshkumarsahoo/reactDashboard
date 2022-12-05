
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import GetUsers from './components/GetUsers';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/user/create" element={ <AddUser/> } />
        <Route path="/user/:id" element={ <EditUser/> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
