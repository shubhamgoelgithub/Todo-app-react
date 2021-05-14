import React, { Component, useState } from 'react';

const Todo= ()=>{
    const[inputList,SetInputList]=useState("");
    const[Items, setItems]=useState([]);

    const itemEvent = (event)=>{
        SetInputList(event.target.value);
    }

    const ListofItems = ()=>{
        setItems((todoitems)=> {
            return [...todoitems,inputList]
        });
        SetInputList('');
    };

    return (
    <div>
        <div className="main-div">
            <div className="center-div">
                <br/>
                <h1>To-Do List</h1>
                <br/>
                <input type="text" placeholder="add items" value={inputList} onChange={itemEvent}/>
                <button onClick={ListofItems}> + </button>

                <ol>
                 { Items.map((itemval) => {
                     return <li>{itemval}</li>
                })}
                </ol>
            </div>
        </div>

    </div>
)}
export default Todo;


