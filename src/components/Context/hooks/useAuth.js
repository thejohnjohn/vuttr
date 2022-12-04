import { useState, useEffect } from 'react';
import axios from 'axios';
import history from '../../../history';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin(formData) {
    const tokenReceived = await api.post('/login', {
        email: formData.email, 
        password: formData.password
      }
    ).then((res) => {
      return res.data.access_token;
    });
    
    localStorage.setItem('token', tokenReceived);
    api.defaults.headers.Authorization = `Bearer ${tokenReceived}`;
    setAuthenticated(true);
    history.push('/user');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}
