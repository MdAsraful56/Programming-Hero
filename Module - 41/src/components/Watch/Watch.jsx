export default function Watch({watch}){
    const {name, price} = watch;
    return(
        <div>
            <h2>Watch: {name} </h2>
            <h5>Price: {price} </h5>
        </div>
    )
}