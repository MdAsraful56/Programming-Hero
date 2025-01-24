import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'Riya'} />
                <Cousin name={'Sadiya'} />
                <Cousin name={'Laki'} />
            </section>
        </div>
    );
};

export default Uncle;