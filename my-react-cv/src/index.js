import react from 'react';
import reactDOM from 'react-dom';
// import "./index.css"



const App = () => {

  return (

    <div>
  
      <nav> 
        <div className='logo'> 
          <img src="./images/logo-nike.png" alt='logo'></img>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      
      <button>Login</button>
      
      </nav>
  
  
    </div>
  
  ) 
}








reactDOM.render(<App/>, document.querySelector('#root'));
