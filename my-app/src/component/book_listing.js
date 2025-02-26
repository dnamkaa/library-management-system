import React from 'react'
import '../style/Book_listing.css'
import book1 from '../image/mybook.jpg'
import {
    BrowserRouter as Router,
    Route,
    Link,
    
    Routes
  } 
  from "react-router-dom";

  const books =[
    {   
        ISBN:'214578',
        Image:book1,
        BookName:'Reach dad and poor dad',
        Price:'100'
    }
    ,
    {   
        ISBN:'214456',
      Image: require('../image/mybook.jpg'),
        BookName:'Happla',
        Price:'300'
    }
    ,
    {   
        ISBN:'214456',
        Image:book1,
        BookName:'',
        Price:'1250'
    }

]
function Book_listing() {
      

  return (
    <div className='booklisting'>

     <ul>
        {books.map((data)=>(
            <li key={data.ISBN}>
                <div> <img src={data.Image} alt={data.BookName}/> </div>
               
                <p>The price:{data.Price}</p>
                <p><Link to={'/view'}>view Book</Link></p>
            </li>
           
        ))}
    </ul>

    </div>
  
  )
}

export default Book_listing