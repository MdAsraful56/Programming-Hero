import Cousin from "./Cousin";


const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'Shanto'} />
                <Cousin name={'Lota'} />
                <Cousin name={'Pranto'} />
            </section>
        </div>
    );
};

export default Aunty;