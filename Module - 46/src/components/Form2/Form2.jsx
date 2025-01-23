import { useState } from "react";


const Form2 = () => {

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
        }
        else {
            setError('');
        }
        console.log(email);
        console.log(password);
        console.log(name);
    }
    
    const [name, setName] = useState('Ashraful');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input
                    onChange={handleNameChange}
                    type="text" name="name" value={name} />
                <br />
                <input 
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{ error }</p>
                }
            </form>
        </div>
    );
};

export default Form2;