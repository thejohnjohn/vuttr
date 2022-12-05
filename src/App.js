import { BrowserRouter, Routes, Route } from 'react-router-dom';
import history from './history';

import { AuthProvider } from './components/Context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home'; 
import User from './pages/user';
import AddTool from './pages/add-tool';
import DeleteTool from './pages/delete-tool';
import ToolDetail from './pages/tool-detail';

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
          <Route path="/add-tool" element={
            <PrivateRoute redirectTo="/">
              <AddTool />
            </PrivateRoute>
          }/>
          <Route path="/delete-tool" element={
            <PrivateRoute redirectTo="/">
              <DeleteTool />
            </PrivateRoute>
          }/>
          <Route path="/tool-detail" element={
            <PrivateRoute redirectTo="/">
              <ToolDetail />
            </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
