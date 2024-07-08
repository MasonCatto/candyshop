import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}