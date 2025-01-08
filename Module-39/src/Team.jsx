import { useState } from "react"

export default function Team(){

    const [Team, setTeam] = useState(0);
    const handleClicked = () => {
        const newTeam = Team + 1;
        setTeam(newTeam);
    }
    const handleClicked2 = () => {
        const newTeam = Team - 1;
        setTeam(newTeam);
    }

    return (
        <div style={{
            border: '2px solid red',
            borderRadius: '20px',
            padding: '12px',
            margin: '12px'
        }}> 
            <h3>Player :  {Team} </h3>
            <button onClick={handleClicked} >Add</button>
            <button onClick={handleClicked2} >Reduce</button>
        </div>
    )
}