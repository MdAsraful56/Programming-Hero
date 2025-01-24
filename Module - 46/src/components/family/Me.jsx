import Spc from "./Spc";


const Me = ({asset}) => {
    return (
        <div>
            <h3>ME</h3>
            <section className="flex">
                <Spc asset={asset} />
            </section>
        </div>
    );
};

export default Me;