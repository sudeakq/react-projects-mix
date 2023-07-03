
import './App.css';
import { useState } from 'react';

function App() {
 const [newItem, setNewItem] =useState("");
 const [items,setItems]=useState([]);

 function deleteItem(id){
 const newArray = items.filter(item => item.id !==id);
 setItems(newArray);
 }

 function addItem(){
  if(!newItem){
    alert("enter an item");
    return;
  }
  const item={
    id: Math.floor(Math.random()*1000),
    value:newItem
  }
  setItems(oldItems => [...oldItems,item])
  setNewItem("")
 }


  return (
    <div className='kart'>
    <h1>TO DO LIST APP</h1>

    <input 
    type='text'
    placeholder='add new items here'
    value={newItem}
    onChange={e=>setNewItem(e.target.value)}
    className='input'>

    </input>


    <button onClick={()=> addItem()}className='buton'>
      ADD
    </button>

    <ul className='gorevler'>
      {items.map(item=>{
        return(
          <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>X</button></li>
        )
      })}
      
    </ul>
    </div>
  );
}

export default App;
