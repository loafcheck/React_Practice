
/*eslint-disable*/
//App.js
import './App.css';
import {useState} from 'react';

function App() {

  let post= 'restaurant';
  let [title,setTitle] = useState (['Spiderman','Mulan','Paris']);
  let [like,setLike]= useState([0,0,0]);
  let [modal,setModal]= useState(false);
  let [motitle, setMotitle] = useState(0);
  let [user,setuser] = useState('');
 

  return (
    <div className="App">
   
        <div className="black-nav">
          <h4 >blog name</h4> 
        </div> 
        
        <button onClick = {()=>{
          let copy2 = [...title];
          copy2.sort();
          setTitle(copy2);
        }}>Sort Button</button>
 
        {
          title.map(function(a, i){
            return (
              <div className="list" key={i}>
                <h4>{title[i]}</h4>
                <span onClick={()=>{
                   let copy = [...like];
                    copy[i] = copy[i]+1;
                    setLike(copy);
                    console.log(copy);
                 }}>press 💗 
                 </span>
                 {like[i]}
                <p>Feb</p>
                <button onClick={()=>{setModal(true); setMotitle(i)}}>detail</button>
                <button onClick={()=>{
                  let copy5 = [...title];
                  copy5.splice(i,1);
                  setTitle(copy5)}}>delete</button>           
            </div>
            )
          })
        }


        <input type="input" onChange={(e)=>{setuser(e.target.value)}}></input>
        <button onClick={()=>{
          let copy4 = [...title];
          copy4.unshift(user);
          setTitle(copy4);
        }}>upload</button>

       
        {
          modal == true ? 
          <Modal motitle={motitle} setTitle={setTitle} color={'orange'} title={title}/> 
          : null
        } 

    </div>
  );
}


function Modal (props) {
  return (
    <div className="modal"> 
      <h4> {props.title[props.motitle]}
       </h4>
      <p>date</p>
      <p>content</p> 
      <button onClick={()=>{
        let copy3 = [...props.title];
        copy3 = copy3.map(x => x+'love');
        props.setTitle(copy3);
      }}>switch</button>
    </div>
  )
}



export default App;
