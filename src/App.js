import React, { useState } from 'react'
import './App.css';
import TodoLists from './Component/TodoLists';

function App() {
  const[inputList,setInputList]=useState();
  const[Items,setItems]=useState([]);
  const ItenEvents=(e)=>{
    setInputList(e.target.value);
  };
  const listOfItem=(oldItem)=>{
      setItems((oldItem)=>{
        return[...oldItem,inputList];
      });
      setInputList("");
  };
  const deleteItem=(id)=>{
    // console.log('delete')
    setItems((oldItem)=>{
      return oldItem.filter((arrElam,index)=>{
        return index !== id;

      })

    })
  }

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" 
        placeholder=" Add a Item"
        onChange={ItenEvents}
        value={inputList}/>
        <button onClick={listOfItem}><i class="fa-solid fa-plus"></i></button>


        <ol>
          {Items.map((itemval,index) =>{
            return <TodoLists 
            key={index} 
            id={index} 
            onSelect={deleteItem}
             text={itemval}

             />
          })}
        </ol>
      </div>

    </div>
    </>
  );
}

export default App;
