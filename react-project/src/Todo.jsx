export default function Todo({task, isDone}){
    const TodoStyle = {
        border: '1px solid purple',
        borderRadius: '10px',
        margin: '5px',
        padding: '5px'
    }


    // default way 
    // return (
    //     <div style={TodoStyle}>
    //         <li>Task :- {task} </li>
    //     </div>
    // )


    // conditional rendering option 1
    // if (isDone) {
    //     return <li style={TodoStyle} >Finished: {task} </li>
    // } else {
    //     return <li style={TodoStyle} >Work on: {task} </li>
    // }


    // conditional reandering option 2 
    // if (isDone) {
    //     return <li style={TodoStyle} >Finish: {task} </li>
    // }
    // return <li style={TodoStyle} >Work on: {task} </li>


    // conditional reandering option 3
    // return (
    //     <li style={TodoStyle} > {isDone ? 'Finished' : 'Work now'} : {task} </li>
    // )


    // conditional reandering option 4
    // return (
    //     <li style={TodoStyle}> {task} {isDone && ': Done'} </li>
    // )


    // conditional reandering option 5
    // return (
    //     <li style={TodoStyle}> {task} {isDone || ': Do it'} </li>
    // )


    // conditional reandering option 6 
    // if (isDone) {
    //     // return <li style={TodoStyle} >Finish: {task} </li>
    //     return null;
    // }
    // return <li style={TodoStyle} >Work on: {task} </li>



    // conditional rendering option 7
    let listItem;
    if (isDone) {
        listItem = <li style={TodoStyle} >Finished: {task} </li>
    } else {
        listItem = <li style={TodoStyle} >Work on: {task} </li>
    }
    return listItem;

}