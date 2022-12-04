import { BrowserRouter, Routes, Route } from 'react-router-dom';
import history from './history';

import { AuthProvider } from './components/Context/AuthContext';
import Home from './pages/Home'; 

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
