import { useState } from 'react'
import './App.css'
import useFetcher from './hooks/useFetcher';

function App() {
  let url = 'https://jsonplaceholder.typicode.com/photos';
  let {data, loading, err} = useFetcher(url);

  if (loading) return <h1>LOADING...</h1>;

  if (err) return <h1>ERROR...</h1>;
  

  return (
    <>
    <div><h1>PHOTOS</h1></div>
    <div className='container'>
     {data.map((element, index)=>{
        return( 
        <div className='newbox'> 


            <div><img src={element?.url} /></div>
            <div>{element?.title}</div>
            
        
        
        
        </div>
      )

      })}

    </div>
      
    </>
  )
}

export default App
