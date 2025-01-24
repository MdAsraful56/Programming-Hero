import useInput from "../../hooks/useInput";


const HookForm = () => {

    // const [name, handleNameChange] = useInput('nayma')
    const emailState = useInput('example@gmail.com');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('data :', emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                {/* <input type="text" value={name} onChange={handleNameChange} name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;