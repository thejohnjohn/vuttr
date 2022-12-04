import { BrowserRouter, Routes, Route } from 'react-router-dom';
import history from './history';

import { AuthProvider } from './components/Context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home'; 
import User from './pages/user';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={
            <PrivateRoute redirectTo="/">
              <User />
            </PrivateRoute>
          }/> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
