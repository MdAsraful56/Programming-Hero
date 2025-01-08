// import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'

function App() {

  // function handleClick() {
  //   alert('Click - 01');
  // }

  // const handleClick2 = () => {
  //   alert('Click - 02');
  // }

  // const addToFive = (num) => {
  //   alert(num + 5);
  // }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h3>React Core Concepts - 02</h3>
      <h4>Day - 02</h4>


      {/* <Users></Users> */}


      {/* <Team></Team>

      <Counter></Counter> */}


      {/* <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click Me</button>
      <button onClick={ () => { alert('Click - 03') } } >Click Me</button>
      <button onClick={ () => {addToFive(10)} } >Click</button> */}


    </>
  )
}

export default App
