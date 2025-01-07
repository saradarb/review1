import React from 'react'
import List from './List'



const fruits = [{id: 1, name:"apple", Calories:95}, 
                {id: 2, name:"orange", Calories:45}, 
                {id: 3, name:"banana", Calories:105}, 
                {id: 4, name:"coconut", Calories:159}, 
                {id: 5, name:"pineapple", Calories:37}];

const vegetables = [{id: 6, name:"potatoes", Calories:110}, 
                    {id: 7, name:"celery", Calories:15}, 
                    {id: 8, name:"Carrots", Calories:25}, 
                    {id: 9, name:"corn", Calories:63}, 
                    {id: 10, name:"broccoli", Calories:50}];



function App() {
  return (
    <>
   {fruits.length > 0 &&  <List items={fruits} category="Fruits" />}
   {vegetables.length > 0 &&  <List items={vegetables} category="Vegetables" />}


    </>
  )
}

export default App
