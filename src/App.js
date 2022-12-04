import Card from './components/Card';

import './App.css';


function App() {
  return (
    <main>
      <button className='login'><span>Login</span></button>
      <div className='deck'>
        <Card tool={'Tool'} />
        <Card tool={'Tool'} />
        <Card tool={'Tool'} />
        <Card tool={'Tool'} />
        <Card tool={'Tool'} />
      </div>
    </main>
  );
}

export default App;
