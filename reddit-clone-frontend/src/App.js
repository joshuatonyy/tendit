import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { ThreadPage } from './pages/ThreadPage/ThreadPage';
import PostPage from './pages/PostPage/PostPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/thread' element={<ThreadPage />}/>
        <Route path='/post' element={<PostPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
