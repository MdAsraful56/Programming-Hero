import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    } ,[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" ref={nameRef} name="name" />
                <br />
                <input type="email" defaultValue={'example@gmail.com'} ref={emailRef} name="email" />
                <br />
                <input type="password" ref={passwordRef} name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;