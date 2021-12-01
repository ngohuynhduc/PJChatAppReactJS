
import './App.css';
import Login from './components/login';
import ChatRoom from './components/Chat-room';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import Addroom from './components/Modals/Addroom';
import InviteMemberModal from './components/Modals/InviteMember';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
       <AppProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<ChatRoom/>}/>
        </Routes>
        <Addroom/>
        <InviteMemberModal/>
       </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
