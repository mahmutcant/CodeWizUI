import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/layout" element={<AppLayout />}>
                    <Route index element={<Chat />} />
                    <Route path="started" element={<Blank />} />
                    <Route path="calendar" element={<Blank />} />
                    <Route path="user" element={<Blank />} />
                    <Route path="order" element={<Blank />} />
                    <Route path=":id" element={<Chat />} />
                </Route>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
