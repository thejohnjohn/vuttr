import './styles.css';

const Card = ({ tool }) => {
  return(
    <div className='tool-card' >
        <div className='logo'>

        </div>
        <p className='tool-name' >{ tool }</p>
    </div>
  );
}

export default Card;

