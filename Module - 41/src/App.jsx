import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch';

function App() {


  const [watches, setWatches] = useState([]);

  useEffect( () => {
    fetch('watchs.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  } ,[])


  return (
    <>
      <h1>Hello World</h1>
      {
        watches.map(watch => <Watch watch={watch} key={watch.id} ></Watch> )
      }

    </>
  )
}

export default App
