import Bro from "./Bro";
import Me from "./Me";


const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className="flex">
                <Me asset={asset} />
                <Bro />
            </section>
        </div>
    );
};

export default Dad;