

const ReusAbleForm = ({formTitle, submitBtn='Submit'}) => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReusAbleForm;