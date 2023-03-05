import React, { useState, useEffect } from 'react'
import "./Home.css";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function NewHome() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [drinks, setDrinks] = useState([]);
    const navigate = useNavigate();
  
    const addDrink = () => {
      Axios.post("http://localhost:3001/adddrink", {name: name, price: price, description: description}).then(() => {
        setDrinks([...drinks, { name: name, price: price, description: description}]);
        
      }

      )
    };

    const deleteDrink = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`)
        window.location.reload();
      
    };

    useEffect(() => {
      Axios.get("http://localhost:3001/read").then((res) =>
      setDrinks(res.data))
    }, [])
    
  
    return (
      <div className='App'>
        <div className='inputs'>
          <div className='title'>
            <h2>ENTER DRINKS</h2>
          </div>
          <input placeholder="name" type="text" onChange={(event) => {setName(event.target.value)}}></input>
          <input placeholder="price" type="number" onChange={(event) => {setPrice(event.target.value)}}></input>
          <input placeholder="description" type="text" onChange={(event) => {setDescription(event.target.value)}}></input>
          <button onClick={addDrink}><b>Add drink</b></button>
        </div>

        <div className='drinks'>
          {drinks.map((val) => {
            return (
              <div className='drinkContainer'>
              <div className='drink'>
                <h2>{val.name}</h2>
                <p><b>£{val.price}</b></p>
                <p>{val.description}</p>
              </div>
              <div className='buttonContainer'>
              <button className='deleteButton' onClick={() => {deleteDrink(val._id)}}><b>Delete drink</b></button>
             </div>
              </div>

            )
          })}
        </div>

      </div>
    )
  }

export default NewHome