import react from 'react';
import reactDOM from 'react-dom';

let myNumber = 24
 
function Hi (){
  return <div>Hello <strong>Arshad!</strong>
  
  
  
  </div>
}

          <div className='items'>abc items
          <li>
            <ul>items number 1</ul>
            <ul>items number 2</ul>
            <ul>items number 3</ul>
            <ul>items number 4</ul>
            <ul>items number {myNumber + 34}</ul>

          </li>
          </div>

reactDOM.render(<Hi/>, document.querySelector('#root'));
