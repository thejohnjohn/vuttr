import Card from '../components/Card';

import './styles.css';

function Home() {
  return (
    <main>
      <button className='login'>Login</button>
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

export default Home;

