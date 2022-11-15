
/*eslint-disable*/
//App.js
import './App.css';
import {useState} from 'react';

function App() {

  let post= 'restaurant';
  let [title1,b] = useState (['자료1','자료2','자료3']);
  let [like,c]= useState(0);
 

  return (
    <div className="App">
      <div>
        <div className="black-nav">
          <h4 >blog name</h4> 
        </div>
          <h4 onClick={()=>{b('바꿔')}}>{ title1[0]} <span onClick={()=>{c(like+1)}}>💗</span>{like}</h4>
          <p>feb.17.published</p>
          <h4>{ title1[1]} <span onClick={()=> {c(like+1)}}>💗</span>{like}</h4>
          <p>feb.17.published</p>
          <h4>{ title1[2] }</h4>
          <p>feb.17.published</p>
        </div>
    </div>
  );
}

export default App;
