import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todu from "./Todo";
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const singers = [
    {name: 'Minar Rahman', age: 45},
    {name: 'Kobir Rahman', age: 55},
    {name: 'Nila Rahman', age: 23},
    {name: 'Eva Rahman', age: 35},
  ]

  // const actors = ['salman shah', 'Rubel', 'Jasim', 'Raj'];

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


    {
      singers.map(singer => <Singer singer={singer} ></Singer> )
    }


    {/* <Actor name='Ashraful'></Actor>
    {
      actors.map(actor => <Actor name={actor} ></Actor>)
    } */}


      {/* <Todo isDone={false} task='Learn React'></Todo>
      <Todo isDone={true} task='Learn HTML'></Todo>
      <Todo isDone={true} task='Learn JavaScript'></Todo> */}


      {/* <Person></Person>
      <First></First>
      <Student name='Ashraful' relation='One Side Love' ></Student>
      <Student name='Shanto' relation='Love Sayma' ></Student>
      <Student name='Rain' ></Student>
      <Developer></Developer>
      <Device name="Laptop" price='27000' ></Device>
      <Device name="Mobile" price='20000' ></Device>
      <Device name="Watch" price='400' ></Device> */}
    </>
  )
}


function Device(props){

  return <h3>This Device: Name- {props.name} & Price- {props.price} </h3>
}


function First() {
  const age = 20;
  const money = 1200;
  return <h4>I am Ashraful with {age} & my Money {money} </h4>
}


function Person(){
  return (
    <div style={{
      border: '2px solid red',
      borderRadius: '20px'
    }}>
      <p>This is a first function I create Today</p>
    </div>
  )
}

function Student({name, relation='! single'}){
  return (
    <div className='student' >
      {/* <h5>About me </h5> */}
      <p>Name : {name} </p>
      <p>Relation : {relation} </p>
    </div>
  )
}


function Developer(){
  const DeveloperStyle = {
    margin: '20px',
    padding: '10px',
    border: '2px solid purple',
    borderRadius: '18px'
  }
  return (
    <div style={DeveloperStyle}>
      <h4>Coding: HTML, CSS, JS, React</h4>
    </div>
  )
}



export default App
